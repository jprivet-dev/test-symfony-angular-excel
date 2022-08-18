# Executables (local)
DOCKER_COMP = docker-compose

# Docker containers
PHP_CONT = $(DOCKER_COMP) exec php
PHP_RUN = $(DOCKER_COMP) run php

# Executables
PHP      = $(PHP_CONT) php
COMPOSER = $(PHP_CONT) composer
SYMFONY  = $(PHP_CONT) bin/console
DOT      = $(PHP_RUN) dot

# Misc
.DEFAULT_GOAL = help
.PHONY        = help build up start down logs sh composer vendor sf cc

## —— 🎵 🐳 The Symfony-docker Makefile 🐳 🎵 ——————————————————————————————————
help: ## Print self-documented Makefile.
	@echo "------------------------"
	@echo "SELF-DOCUMENTED MAKEFILE"
	@echo "------------------------"
	@grep -E '(^[.a-zA-Z_-]+[^:]+:.*##.*?$$)|(^#{2})' $(MAKEFILE_LIST) \
	| awk 'BEGIN {FS = "## "}; \
		{ \
			split($$1, command, ":"); \
			target=command[1]; \
			description=$$2; \
			# --- space --- \
			if (target=="##") \
				printf "\033[33m%s\n", ""; \
			# --- title --- \
			else if (target=="" && description!="") \
				printf "\033[33m\n%s\n", description; \
			# --- command + description --- \
			else if (target!="" && description!="") \
				printf "\033[32m  %-30s \033[0m%s\n", target, description; \
			# --- do nothing --- \
			else \
				; \
		}'
	@echo

## —— Docker 🐳 ————————————————————————————————————————————————————————————————

build: ## Builds the Docker images
	@$(DOCKER_COMP) build --pull --no-cache

up: ## Start the docker hub
	@$(DOCKER_COMP) up

start: up ## Same as up

down: ## Stop the docker hub
	@$(DOCKER_COMP) down --remove-orphans

logs: ## Show live logs
	@$(DOCKER_COMP) logs --tail=0 --follow

sh: ## Connect to the PHP FPM container
	@$(PHP_CONT) sh

## —— Composer 🧙 ——————————————————————————————————————————————————————————————

composer: ## Run composer, pass the parameter "c=" to run a given command, example: make composer c='req symfony/orm-pack'
	@$(eval c ?=)
	$(COMPOSER) $(c)

vendor: ## Install vendors according to the current composer.lock file
vendor: c=install --prefer-dist --no-dev --no-progress --no-scripts --no-interaction
vendor: composer

## —— Symfony 🎵 ———————————————————————————————————————————————————————————————

sf: ## List all Symfony commands or pass the parameter "c=" to run a given command, example: make sf c=about
	@$(eval c ?=)
	$(SYMFONY) $(c)

cc: c=c:c ## Clear the cache
cc: sf

## —— Doctrine 💽 ——————————————————————————————————————————————————————————————

doctrine_db_create: ## Create the configured database.
	$(SYMFONY) doctrine:database:create --if-not-exists

doctrine_db_drop: ## Drop the configured database.
	$(SYMFONY) doctrine:database:drop --if-exists --force

doctrine_schema_validate: ## Validate the mapping files.
	$(SYMFONY) doctrine:schema:validate

doctrine_mapping_info: ## List mapped entities.
	$(SYMFONY) doctrine:mapping:info

##

doctrine_migration_new: ## Make a new migration.
	$(SYMFONY) make:migration

doctrine_migration_diff: ## Generate a migration by comparing your current database to your mapping information.
	$(SYMFONY) doctrine:migrations:diff

doctrine_migration_run: ## Execute a migration to the latest available version.
	$(SYMFONY) doctrine:migrations:migrate

doctrine_migration_update: doctrine_migration_new doctrine_migration_run ## Make a new migration and run it.

doctrine_fixtures_load: ## Load fixtures.
	$(SYMFONY) doctrine:fixtures:load

doctrine_db_reset: doctrine_db_drop doctrine_db_create doctrine_migration_run ## Drop & Create the configured database & Execute a migration.

## —— Troubleshooting 😵‍️ ———————————————————————————————————————————————————————

# See https://github.com/dunglas/symfony-docker/blob/main/docs/troubleshooting.md
permissions: ## Run it if you work on linux and cannot edit some of the project files
	docker-compose run --rm php chown -R $$(id -u):$$(id -g) .

