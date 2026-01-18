
-- MetaFlow Pro Database Schema
-- Optimized for MySQL 8.x

CREATE DATABASE IF NOT EXISTS metaflow_pro;
USE metaflow_pro;

-- Users table
CREATE TABLE users (
    id CHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user') DEFAULT 'user',
    status ENUM('active', 'suspended') DEFAULT 'active',
    reset_token VARCHAR(100) NULL,
    reset_token_expiry DATETIME NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Meta Accounts (OAuth Tokens)
CREATE TABLE social_accounts (
    id CHAR(36) PRIMARY KEY,
    user_id CHAR(36) NOT NULL,
    platform ENUM('facebook', 'instagram', 'whatsapp') NOT NULL,
    platform_id VARCHAR(100) NOT NULL,
    account_name VARCHAR(255),
    access_token TEXT NOT NULL,
    refresh_token TEXT NULL,
    token_expiry DATETIME NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Pages & Business Entities
CREATE TABLE meta_entities (
    id CHAR(36) PRIMARY KEY,
    account_id CHAR(36) NOT NULL,
    entity_type ENUM('page', 'instagram_business', 'whatsapp_number') NOT NULL,
    entity_platform_id VARCHAR(100) NOT NULL,
    entity_name VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (account_id) REFERENCES social_accounts(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Posts Table
CREATE TABLE posts (
    id CHAR(36) PRIMARY KEY,
    user_id CHAR(36) NOT NULL,
    content TEXT,
    media_json JSON, -- Stores array of URLs
    platforms JSON, -- ['facebook', 'instagram']
    status ENUM('draft', 'scheduled', 'published', 'failed') DEFAULT 'draft',
    scheduled_at DATETIME NULL,
    published_at DATETIME NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Messaging Engine
CREATE TABLE message_threads (
    id CHAR(36) PRIMARY KEY,
    entity_id CHAR(36) NOT NULL,
    external_thread_id VARCHAR(255) NOT NULL,
    participant_name VARCHAR(255),
    last_message_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (entity_id) REFERENCES meta_entities(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE messages (
    id CHAR(36) PRIMARY KEY,
    thread_id CHAR(36) NOT NULL,
    sender_type ENUM('user', 'customer', 'ai') NOT NULL,
    text TEXT,
    media_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (thread_id) REFERENCES message_threads(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Automation Rules
CREATE TABLE auto_reply_rules (
    id CHAR(36) PRIMARY KEY,
    user_id CHAR(36) NOT NULL,
    rule_name VARCHAR(255),
    trigger_keyword VARCHAR(255), -- Comma separated or regex
    reply_template TEXT,
    use_ai_logic BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- WhatsApp Templates
CREATE TABLE whatsapp_templates (
    id CHAR(36) PRIMARY KEY,
    entity_id CHAR(36) NOT NULL,
    template_name VARCHAR(255) NOT NULL,
    language_code VARCHAR(10) DEFAULT 'en',
    category VARCHAR(50),
    status ENUM('PENDING', 'APPROVED', 'REJECTED') DEFAULT 'PENDING',
    body_text TEXT,
    header_text VARCHAR(255),
    footer_text VARCHAR(255),
    FOREIGN KEY (entity_id) REFERENCES meta_entities(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- System Logs
CREATE TABLE audit_logs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id CHAR(36) NULL,
    action VARCHAR(255),
    details JSON,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;
