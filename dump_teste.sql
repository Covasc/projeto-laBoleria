--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

-- Started on 2023-01-16 13:05:37 -03

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
-- TOC entry 210 (class 1259 OID 24665)
-- Name: cakes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cakes (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    description text
);


ALTER TABLE public.cakes OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 24664)
-- Name: cakes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cakes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cakes_id_seq OWNER TO postgres;

--
-- TOC entry 3381 (class 0 OID 0)
-- Dependencies: 209
-- Name: cakes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cakes_id_seq OWNED BY public.cakes.id;


--
-- TOC entry 212 (class 1259 OID 24674)
-- Name: clients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clients (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    address text NOT NULL,
    phone text NOT NULL
);


ALTER TABLE public.clients OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 24673)
-- Name: clients_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.clients_id_seq OWNER TO postgres;

--
-- TOC entry 3382 (class 0 OID 0)
-- Dependencies: 211
-- Name: clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;


--
-- TOC entry 214 (class 1259 OID 24683)
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    "clientId" integer NOT NULL,
    "cakeId" integer NOT NULL,
    quantity integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now(),
    "totalPrice" integer NOT NULL
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 24682)
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO postgres;

--
-- TOC entry 3383 (class 0 OID 0)
-- Dependencies: 213
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- TOC entry 3217 (class 2604 OID 24668)
-- Name: cakes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cakes ALTER COLUMN id SET DEFAULT nextval('public.cakes_id_seq'::regclass);


--
-- TOC entry 3218 (class 2604 OID 24677)
-- Name: clients id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);


--
-- TOC entry 3219 (class 2604 OID 24686)
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- TOC entry 3371 (class 0 OID 24665)
-- Dependencies: 210
-- Data for Name: cakes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cakes (id, name, price, image, description) FROM stdin;
1	Bolo de Maça	1500	https://img.cybercook.com.br/imagens/receitas/544/bolo-de-maca-com-casca-3.jpeg	Bolo com recheio de maças silvestres
\.


--
-- TOC entry 3373 (class 0 OID 24674)
-- Dependencies: 212
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clients (id, name, address, phone) FROM stdin;
1	Lucas Marques	Tancredo Neves, 34, Sacramento, Ouro Preto, MG	31999999999
2	Lisandra Paixão	Tancredo Neves, 34, Sacramento, Ouro Preto, MG	99999999999
3	Silvania Xavier	Tancredo Neves, 34, Sacramento, Ouro Preto, MG	31999999998
\.


--
-- TOC entry 3375 (class 0 OID 24683)
-- Dependencies: 214
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, "clientId", "cakeId", quantity, "createdAt", "totalPrice") FROM stdin;
1	1	1	2	2023-01-11 12:49:39.573208	2600
2	2	1	1	2023-01-11 12:52:30.665224	2600
\.


--
-- TOC entry 3384 (class 0 OID 0)
-- Dependencies: 209
-- Name: cakes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cakes_id_seq', 4, true);


--
-- TOC entry 3385 (class 0 OID 0)
-- Dependencies: 211
-- Name: clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.clients_id_seq', 3, true);


--
-- TOC entry 3386 (class 0 OID 0)
-- Dependencies: 213
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 2, true);


--
-- TOC entry 3222 (class 2606 OID 24701)
-- Name: cakes cakes_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cakes
    ADD CONSTRAINT cakes_name_key UNIQUE (name);


--
-- TOC entry 3224 (class 2606 OID 24672)
-- Name: cakes cakes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cakes
    ADD CONSTRAINT cakes_pkey PRIMARY KEY (id);


--
-- TOC entry 3226 (class 2606 OID 24681)
-- Name: clients clients_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);


--
-- TOC entry 3228 (class 2606 OID 24689)
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- TOC entry 3230 (class 2606 OID 24695)
-- Name: orders orders_cakeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "orders_cakeId_fkey" FOREIGN KEY ("cakeId") REFERENCES public.cakes(id);


--
-- TOC entry 3229 (class 2606 OID 24690)
-- Name: orders orders_clientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "orders_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES public.clients(id);


-- Completed on 2023-01-16 13:05:38 -03

--
-- PostgreSQL database dump complete
--

