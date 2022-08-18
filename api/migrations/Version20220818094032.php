<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220818094032 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE music_group_data ALTER origine DROP NOT NULL');
        $this->addSql('ALTER TABLE music_group_data ALTER ville DROP NOT NULL');
        $this->addSql('ALTER TABLE music_group_data ALTER annee_debut DROP NOT NULL');
        $this->addSql('ALTER TABLE music_group_data ALTER presentation DROP NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE music_group_data ALTER origine SET NOT NULL');
        $this->addSql('ALTER TABLE music_group_data ALTER ville SET NOT NULL');
        $this->addSql('ALTER TABLE music_group_data ALTER annee_debut SET NOT NULL');
        $this->addSql('ALTER TABLE music_group_data ALTER presentation SET NOT NULL');
    }
}
