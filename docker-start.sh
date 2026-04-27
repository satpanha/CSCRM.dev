#!/bin/bash

# CRM Docker Startup Script
# This script builds and starts all services: PostgreSQL, Backend, and Frontend

set -e

echo ""
echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║          CRM Application - Docker Startup                     ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""

# Check if docker is running
if ! docker ps > /dev/null 2>&1; then
    echo "❌ Docker daemon is not running. Please start Docker first."
    exit 1
fi

echo "✅ Docker is running"
echo ""

# Build and start services
echo "📦 Building and starting all services..."
echo ""

docker-compose up -d

echo ""
echo "✅ All services are starting..."
echo ""

# Wait for database to be ready
echo "⏳ Waiting for database to be ready..."
sleep 5

# Check services status
echo ""
echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║                    Services Status                           ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""

docker-compose ps

echo ""
echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║                    Access Points                             ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""
echo "🌐 Frontend:      http://localhost:5173"
echo "🔧 Auth Service:  http://localhost:3001"
echo "🔧 CRM Core:      http://localhost:3002"
echo "🗄️  Database:      localhost:5432"
echo ""
echo "💾 Database Credentials:"
echo "   Username: postgres"
echo "   Password: postgres"
echo "   Database: crm"
echo ""
echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║                    Useful Commands                           ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""
echo "View logs:              docker-compose logs -f"
echo "View specific service:  docker-compose logs -f <service>"
echo "Stop all services:      docker-compose down"
echo "Restart services:       docker-compose restart"
echo "Run migrations:         docker-compose exec crm-core npx prisma migrate deploy"
echo "Database shell:         docker-compose exec postgres psql -U postgres -d crm"
echo ""
