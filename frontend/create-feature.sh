#!/bin/bash

# Usage: ./create-feature.sh user-management

if [ -z "$1" ]; then
  echo "Usage: $0 <feature-name>"
  exit 1
fi

# Normalize feature name (kebab-case)
FEATURE_NAME=$(echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g')
FEATURE_PATH="src/feature/$FEATURE_NAME"

# Global pages directory
PAGES_PATH="src/pages"

# PascalCase (IMPORTANT FIX)
PASCAL_NAME=$(echo "$FEATURE_NAME" | sed -r 's/(^|-)([a-z])/\U\2/g')

# Prevent overwrite
if [ -d "$FEATURE_PATH" ]; then
  echo "❌ Feature '$FEATURE_NAME' already exists!"
  exit 1
fi

echo "🚀 Creating feature: $FEATURE_NAME"

# Create feature structure
mkdir -p "$FEATURE_PATH"/{api,components,hooks,types}

# Ensure global pages exists
mkdir -p "$PAGES_PATH"

# ------------------------
# index.ts
# ------------------------
cat > "$FEATURE_PATH/index.ts" << EOF
// Public API for $FEATURE_NAME feature

export * from './components';
export * from './hooks';
export * from './types';
export * from './api';
EOF

# ------------------------
# API
# ------------------------
cat > "$FEATURE_PATH/api/${FEATURE_NAME}.api.ts" << EOF
// API layer for $FEATURE_NAME

export const fetch${PASCAL_NAME} = async () => {
  return [];
};
EOF

# ------------------------
# Hook (FIXED casing)
# ------------------------
cat > "$FEATURE_PATH/hooks/use${PASCAL_NAME}.ts" << EOF
import { useEffect, useState } from 'react';
import { fetch${PASCAL_NAME} } from '../api/${FEATURE_NAME}.api';

export const use${PASCAL_NAME} = () => {
  const [data, setData] = useState<unknown[]>([]);

  useEffect(() => {
    fetch${PASCAL_NAME}().then(setData);
  }, []);

  return { data };
};
EOF

# ------------------------
# Component
# ------------------------
cat > "$FEATURE_PATH/components/${PASCAL_NAME}.tsx" << EOF
import { use${PASCAL_NAME} } from '../hooks/use${PASCAL_NAME}';

export const ${PASCAL_NAME} = () => {
  const { data } = use${PASCAL_NAME}();

  return (
    <div>
      <h1>${PASCAL_NAME} Feature</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
EOF

# ------------------------
# GLOBAL PAGE (OUTSIDE feature ✅)
# ------------------------
cat > "$PAGES_PATH/${PASCAL_NAME}Page.tsx" << EOF
import { ${PASCAL_NAME} } from '../feature/${FEATURE_NAME}/components/${PASCAL_NAME}';

const ${PASCAL_NAME}Page = () => {
  return <${PASCAL_NAME} />;
};

export default ${PASCAL_NAME}Page;
EOF

# ------------------------
# Types
# ------------------------
cat > "$FEATURE_PATH/types/${FEATURE_NAME}.type.ts" << EOF
export interface ${PASCAL_NAME}Item {
  id: string;
}
EOF

echo "✅ Feature '$FEATURE_NAME' created successfully!"
echo ""
echo "📁 Feature structure:"
tree "$FEATURE_PATH" 2>/dev/null || find "$FEATURE_PATH" -type f | sed "s|$FEATURE_PATH|.|" | sort

echo ""
echo "📄 Page created:"
echo "$PAGES_PATH/${PASCAL_NAME}Page.tsx"