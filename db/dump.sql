--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4
-- Dumped by pg_dump version 13.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: app; Type: DATABASE; Schema: -; Owner: symfony
--

CREATE DATABASE app WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE app OWNER TO symfony;

\connect app

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: doctrine_migration_versions; Type: TABLE; Schema: public; Owner: symfony
--

CREATE TABLE public.doctrine_migration_versions (
    version character varying(191) NOT NULL,
    executed_at timestamp(0) without time zone DEFAULT NULL::timestamp without time zone,
    execution_time integer
);


ALTER TABLE public.doctrine_migration_versions OWNER TO symfony;

--
-- Name: music_group_data; Type: TABLE; Schema: public; Owner: symfony
--

CREATE TABLE public.music_group_data (
    id integer NOT NULL,
    nom_du_groupe character varying(255) NOT NULL,
    origine character varying(255),
    ville character varying(255),
    annee_debut timestamp(0) without time zone,
    annee_separation timestamp(0) without time zone DEFAULT NULL::timestamp without time zone,
    fondateurs character varying(255) DEFAULT NULL::character varying,
    membres integer,
    courant_musical character varying(255) DEFAULT NULL::character varying,
    presentation text
);


ALTER TABLE public.music_group_data OWNER TO symfony;

--
-- Name: music_group_data_id_seq; Type: SEQUENCE; Schema: public; Owner: symfony
--

CREATE SEQUENCE public.music_group_data_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.music_group_data_id_seq OWNER TO symfony;

--
-- Name: music_group_file_upload; Type: TABLE; Schema: public; Owner: symfony
--

CREATE TABLE public.music_group_file_upload (
    id integer NOT NULL,
    filename character varying(255) NOT NULL,
    created_at timestamp(0) without time zone NOT NULL
);


ALTER TABLE public.music_group_file_upload OWNER TO symfony;

--
-- Name: COLUMN music_group_file_upload.created_at; Type: COMMENT; Schema: public; Owner: symfony
--

COMMENT ON COLUMN public.music_group_file_upload.created_at IS '(DC2Type:datetime_immutable)';


--
-- Name: music_group_file_upload_id_seq; Type: SEQUENCE; Schema: public; Owner: symfony
--

CREATE SEQUENCE public.music_group_file_upload_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.music_group_file_upload_id_seq OWNER TO symfony;

--
-- Data for Name: doctrine_migration_versions; Type: TABLE DATA; Schema: public; Owner: symfony
--

COPY public.doctrine_migration_versions (version, executed_at, execution_time) FROM stdin;
DoctrineMigrations\\Version20220817085819	2022-08-18 21:09:09	29
DoctrineMigrations\\Version20220817193134	2022-08-18 21:09:09	6
DoctrineMigrations\\Version20220818094032	2022-08-18 21:09:09	1
\.


--
-- Data for Name: music_group_data; Type: TABLE DATA; Schema: public; Owner: symfony
--

COPY public.music_group_data (id, nom_du_groupe, origine, ville, annee_debut, annee_separation, fondateurs, membres, courant_musical, presentation) FROM stdin;
\.


--
-- Data for Name: music_group_file_upload; Type: TABLE DATA; Schema: public; Owner: symfony
--

COPY public.music_group_file_upload (id, filename, created_at) FROM stdin;
\.


--
-- Name: music_group_data_id_seq; Type: SEQUENCE SET; Schema: public; Owner: symfony
--

SELECT pg_catalog.setval('public.music_group_data_id_seq', 1, false);


--
-- Name: music_group_file_upload_id_seq; Type: SEQUENCE SET; Schema: public; Owner: symfony
--

SELECT pg_catalog.setval('public.music_group_file_upload_id_seq', 1, false);


--
-- Name: doctrine_migration_versions doctrine_migration_versions_pkey; Type: CONSTRAINT; Schema: public; Owner: symfony
--

ALTER TABLE ONLY public.doctrine_migration_versions
    ADD CONSTRAINT doctrine_migration_versions_pkey PRIMARY KEY (version);


--
-- Name: music_group_data music_group_data_pkey; Type: CONSTRAINT; Schema: public; Owner: symfony
--

ALTER TABLE ONLY public.music_group_data
    ADD CONSTRAINT music_group_data_pkey PRIMARY KEY (id);


--
-- Name: music_group_file_upload music_group_file_upload_pkey; Type: CONSTRAINT; Schema: public; Owner: symfony
--

ALTER TABLE ONLY public.music_group_file_upload
    ADD CONSTRAINT music_group_file_upload_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

