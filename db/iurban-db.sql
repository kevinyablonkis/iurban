PGDMP                      |            iurban    15.6 (Debian 15.6-1.pgdg120+2)    16.2 (Debian 16.2-1.pgdg120+2) C    d           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            e           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            f           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            g           1262    16388    iurban    DATABASE     r   CREATE DATABASE iurban WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'es_VE.UTF-8';
    DROP DATABASE iurban;
                postgres    false            �            1259    32917    accessories    TABLE     �   CREATE TABLE public.accessories (
    accessories_id integer NOT NULL,
    model text,
    type_product_id integer,
    type_color_id integer,
    type_gender_id integer,
    price integer,
    stock integer,
    img text,
    likes integer
);
    DROP TABLE public.accessories;
       public         heap    postgres    false            �            1259    32916    accessories_accessories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.accessories_accessories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.accessories_accessories_id_seq;
       public          postgres    false    229            h           0    0    accessories_accessories_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.accessories_accessories_id_seq OWNED BY public.accessories.accessories_id;
          public          postgres    false    228            �            1259    32899    clothing    TABLE       CREATE TABLE public.clothing (
    clothing_id integer NOT NULL,
    model text,
    type_product_id integer,
    size_clothing_id integer,
    type_color_id integer,
    type_gender_id integer,
    price integer,
    stock integer,
    img text,
    likes integer
);
    DROP TABLE public.clothing;
       public         heap    postgres    false            �            1259    32898    clothing_clothing_id_seq    SEQUENCE     �   CREATE SEQUENCE public.clothing_clothing_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.clothing_clothing_id_seq;
       public          postgres    false    225            i           0    0    clothing_clothing_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.clothing_clothing_id_seq OWNED BY public.clothing.clothing_id;
          public          postgres    false    224            �            1259    24687    genders    TABLE     [   CREATE TABLE public.genders (
    type_gender_id integer NOT NULL,
    type_gender text
);
    DROP TABLE public.genders;
       public         heap    postgres    false            �            1259    24686    genders_type_gender_id_seq    SEQUENCE     �   CREATE SEQUENCE public.genders_type_gender_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.genders_type_gender_id_seq;
       public          postgres    false    221            j           0    0    genders_type_gender_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.genders_type_gender_id_seq OWNED BY public.genders.type_gender_id;
          public          postgres    false    220            �            1259    32908    shoes    TABLE       CREATE TABLE public.shoes (
    shoes_id integer NOT NULL,
    model text,
    type_product_id integer,
    size_shoes_id integer,
    type_color_id integer,
    type_gender_id integer,
    price integer,
    stock integer,
    img text,
    likes integer
);
    DROP TABLE public.shoes;
       public         heap    postgres    false            �            1259    32907    shoes_shoes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.shoes_shoes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.shoes_shoes_id_seq;
       public          postgres    false    227            k           0    0    shoes_shoes_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.shoes_shoes_id_seq OWNED BY public.shoes.shoes_id;
          public          postgres    false    226            �            1259    24662    size_clothing    TABLE     a   CREATE TABLE public.size_clothing (
    size_clothing_id integer NOT NULL,
    type_size text
);
 !   DROP TABLE public.size_clothing;
       public         heap    postgres    false            �            1259    24661 "   size_clothing_size_clothing_id_seq    SEQUENCE     �   CREATE SEQUENCE public.size_clothing_size_clothing_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public.size_clothing_size_clothing_id_seq;
       public          postgres    false    215            l           0    0 "   size_clothing_size_clothing_id_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public.size_clothing_size_clothing_id_seq OWNED BY public.size_clothing.size_clothing_id;
          public          postgres    false    214            �            1259    24671 
   size_shoes    TABLE     ^   CREATE TABLE public.size_shoes (
    size_shoes_id integer NOT NULL,
    type_size integer
);
    DROP TABLE public.size_shoes;
       public         heap    postgres    false            �            1259    24670    size_shoes_size_shoes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.size_shoes_size_shoes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.size_shoes_size_shoes_id_seq;
       public          postgres    false    217            m           0    0    size_shoes_size_shoes_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.size_shoes_size_shoes_id_seq OWNED BY public.size_shoes.size_shoes_id;
          public          postgres    false    216            �            1259    24678 
   type_color    TABLE     \   CREATE TABLE public.type_color (
    type_color_id integer NOT NULL,
    type_color text
);
    DROP TABLE public.type_color;
       public         heap    postgres    false            �            1259    24677    type_color_type_color_id_seq    SEQUENCE     �   CREATE SEQUENCE public.type_color_type_color_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.type_color_type_color_id_seq;
       public          postgres    false    219            n           0    0    type_color_type_color_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.type_color_type_color_id_seq OWNED BY public.type_color.type_color_id;
          public          postgres    false    218            �            1259    24696    type_products    TABLE     c   CREATE TABLE public.type_products (
    type_product_id integer NOT NULL,
    type_product text
);
 !   DROP TABLE public.type_products;
       public         heap    postgres    false            �            1259    24695 !   type_products_type_product_id_seq    SEQUENCE     �   CREATE SEQUENCE public.type_products_type_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.type_products_type_product_id_seq;
       public          postgres    false    223            o           0    0 !   type_products_type_product_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.type_products_type_product_id_seq OWNED BY public.type_products.type_product_id;
          public          postgres    false    222            �            1259    41127    users    TABLE     �   CREATE TABLE public.users (
    user_id integer NOT NULL,
    first_name text,
    last_name text,
    email text,
    username text,
    pass_word text
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    41126    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public          postgres    false    231            p           0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;
          public          postgres    false    230            �           2604    32920    accessories accessories_id    DEFAULT     �   ALTER TABLE ONLY public.accessories ALTER COLUMN accessories_id SET DEFAULT nextval('public.accessories_accessories_id_seq'::regclass);
 I   ALTER TABLE public.accessories ALTER COLUMN accessories_id DROP DEFAULT;
       public          postgres    false    229    228    229            �           2604    32902    clothing clothing_id    DEFAULT     |   ALTER TABLE ONLY public.clothing ALTER COLUMN clothing_id SET DEFAULT nextval('public.clothing_clothing_id_seq'::regclass);
 C   ALTER TABLE public.clothing ALTER COLUMN clothing_id DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    24690    genders type_gender_id    DEFAULT     �   ALTER TABLE ONLY public.genders ALTER COLUMN type_gender_id SET DEFAULT nextval('public.genders_type_gender_id_seq'::regclass);
 E   ALTER TABLE public.genders ALTER COLUMN type_gender_id DROP DEFAULT;
       public          postgres    false    221    220    221            �           2604    32911    shoes shoes_id    DEFAULT     p   ALTER TABLE ONLY public.shoes ALTER COLUMN shoes_id SET DEFAULT nextval('public.shoes_shoes_id_seq'::regclass);
 =   ALTER TABLE public.shoes ALTER COLUMN shoes_id DROP DEFAULT;
       public          postgres    false    226    227    227            �           2604    24665    size_clothing size_clothing_id    DEFAULT     �   ALTER TABLE ONLY public.size_clothing ALTER COLUMN size_clothing_id SET DEFAULT nextval('public.size_clothing_size_clothing_id_seq'::regclass);
 M   ALTER TABLE public.size_clothing ALTER COLUMN size_clothing_id DROP DEFAULT;
       public          postgres    false    215    214    215            �           2604    24674    size_shoes size_shoes_id    DEFAULT     �   ALTER TABLE ONLY public.size_shoes ALTER COLUMN size_shoes_id SET DEFAULT nextval('public.size_shoes_size_shoes_id_seq'::regclass);
 G   ALTER TABLE public.size_shoes ALTER COLUMN size_shoes_id DROP DEFAULT;
       public          postgres    false    216    217    217            �           2604    24681    type_color type_color_id    DEFAULT     �   ALTER TABLE ONLY public.type_color ALTER COLUMN type_color_id SET DEFAULT nextval('public.type_color_type_color_id_seq'::regclass);
 G   ALTER TABLE public.type_color ALTER COLUMN type_color_id DROP DEFAULT;
       public          postgres    false    218    219    219            �           2604    24699    type_products type_product_id    DEFAULT     �   ALTER TABLE ONLY public.type_products ALTER COLUMN type_product_id SET DEFAULT nextval('public.type_products_type_product_id_seq'::regclass);
 L   ALTER TABLE public.type_products ALTER COLUMN type_product_id DROP DEFAULT;
       public          postgres    false    222    223    223            �           2604    41130    users user_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    231    230    231            _          0    32917    accessories 
   TABLE DATA           �   COPY public.accessories (accessories_id, model, type_product_id, type_color_id, type_gender_id, price, stock, img, likes) FROM stdin;
    public          postgres    false    229   �L       [          0    32899    clothing 
   TABLE DATA           �   COPY public.clothing (clothing_id, model, type_product_id, size_clothing_id, type_color_id, type_gender_id, price, stock, img, likes) FROM stdin;
    public          postgres    false    225   QM       W          0    24687    genders 
   TABLE DATA           >   COPY public.genders (type_gender_id, type_gender) FROM stdin;
    public          postgres    false    221   \       ]          0    32908    shoes 
   TABLE DATA           �   COPY public.shoes (shoes_id, model, type_product_id, size_shoes_id, type_color_id, type_gender_id, price, stock, img, likes) FROM stdin;
    public          postgres    false    227   0\       Q          0    24662    size_clothing 
   TABLE DATA           D   COPY public.size_clothing (size_clothing_id, type_size) FROM stdin;
    public          postgres    false    215   a_       S          0    24671 
   size_shoes 
   TABLE DATA           >   COPY public.size_shoes (size_shoes_id, type_size) FROM stdin;
    public          postgres    false    217   �_       U          0    24678 
   type_color 
   TABLE DATA           ?   COPY public.type_color (type_color_id, type_color) FROM stdin;
    public          postgres    false    219   �_       Y          0    24696    type_products 
   TABLE DATA           F   COPY public.type_products (type_product_id, type_product) FROM stdin;
    public          postgres    false    223   w`       a          0    41127    users 
   TABLE DATA           [   COPY public.users (user_id, first_name, last_name, email, username, pass_word) FROM stdin;
    public          postgres    false    231   a       q           0    0    accessories_accessories_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.accessories_accessories_id_seq', 20, true);
          public          postgres    false    228            r           0    0    clothing_clothing_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.clothing_clothing_id_seq', 658, true);
          public          postgres    false    224            s           0    0    genders_type_gender_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.genders_type_gender_id_seq', 2, true);
          public          postgres    false    220            t           0    0    shoes_shoes_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.shoes_shoes_id_seq', 176, true);
          public          postgres    false    226            u           0    0 "   size_clothing_size_clothing_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.size_clothing_size_clothing_id_seq', 6, true);
          public          postgres    false    214            v           0    0    size_shoes_size_shoes_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.size_shoes_size_shoes_id_seq', 11, true);
          public          postgres    false    216            w           0    0    type_color_type_color_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.type_color_type_color_id_seq', 16, true);
          public          postgres    false    218            x           0    0 !   type_products_type_product_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.type_products_type_product_id_seq', 14, true);
          public          postgres    false    222            y           0    0    users_user_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.users_user_id_seq', 12, true);
          public          postgres    false    230            �           2606    32924    accessories accessories_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.accessories
    ADD CONSTRAINT accessories_pkey PRIMARY KEY (accessories_id);
 F   ALTER TABLE ONLY public.accessories DROP CONSTRAINT accessories_pkey;
       public            postgres    false    229            �           2606    32906    clothing clothing_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.clothing
    ADD CONSTRAINT clothing_pkey PRIMARY KEY (clothing_id);
 @   ALTER TABLE ONLY public.clothing DROP CONSTRAINT clothing_pkey;
       public            postgres    false    225            �           2606    24694    genders genders_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.genders
    ADD CONSTRAINT genders_pkey PRIMARY KEY (type_gender_id);
 >   ALTER TABLE ONLY public.genders DROP CONSTRAINT genders_pkey;
       public            postgres    false    221            �           2606    32915    shoes shoes_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.shoes
    ADD CONSTRAINT shoes_pkey PRIMARY KEY (shoes_id);
 :   ALTER TABLE ONLY public.shoes DROP CONSTRAINT shoes_pkey;
       public            postgres    false    227            �           2606    24669     size_clothing size_clothing_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.size_clothing
    ADD CONSTRAINT size_clothing_pkey PRIMARY KEY (size_clothing_id);
 J   ALTER TABLE ONLY public.size_clothing DROP CONSTRAINT size_clothing_pkey;
       public            postgres    false    215            �           2606    24676    size_shoes size_shoes_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.size_shoes
    ADD CONSTRAINT size_shoes_pkey PRIMARY KEY (size_shoes_id);
 D   ALTER TABLE ONLY public.size_shoes DROP CONSTRAINT size_shoes_pkey;
       public            postgres    false    217            �           2606    24685    type_color type_color_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.type_color
    ADD CONSTRAINT type_color_pkey PRIMARY KEY (type_color_id);
 D   ALTER TABLE ONLY public.type_color DROP CONSTRAINT type_color_pkey;
       public            postgres    false    219            �           2606    24703     type_products type_products_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.type_products
    ADD CONSTRAINT type_products_pkey PRIMARY KEY (type_product_id);
 J   ALTER TABLE ONLY public.type_products DROP CONSTRAINT type_products_pkey;
       public            postgres    false    223            �           2606    41134    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    231            _   �   x���=�0���_"����ڵk+BG��~1_BdJ.�{��~����<���v�rݱ�w��L�)U)J�I7tȥ�P� ՠ��x���D��u��F�N�E���T�Th(!U��q��G�ͺ�㻋r��4 1 ���	� LL" ����!˔YL��[=L����a=�o��;��g��E      [   �  x���K�\�F׭�2_���YF���l�Q�v`K��D?����+^V��甦��}I�[]�减����K��7.������_�w_�����翽�������ۇϗ/��\�;�����(-H�K�ჭ���ۘ���:�ub����D<��!(��"�b�F�ak8b�[�Ca��D��HU�3"T��Hg����9"10l�H�*g{DbR�="%]��������^���A���������R2��1(�C2�0]f� -Lי�q)��6���t�3N���y�mO	L۞��=%1�y
�3;�R�v<�iǳ2�x6�]O�g�<ӶgL۞52m{�Ĵ�Y���x�´�)L;��iǳ1�zv�������Ӷg�L۞m�o-O�����w��<<>S.�Z�p���EP��,� ��N ��b�	@�@̱Z ���6@������(����>Ɍ��x��
x��8%-p������q ����W�o��痗����J#�����j�Y���)� +�U���yN�b��Y�@���q�y�}ɢH�&��(~��ɪH�����L�:�X�d�W"-�F��߉���i����埰V��O�H�?e"�T�4��p��e���Zӿi�"��4�s�<-�����3�J,�\�4��i�W"-��y���Y��\��/�HÿD"���4������R���[������.���g�DfEf �E�8R�Ȧ�� �+�� �e$�H�H���d"#)DZFX�lU"-�F�eԉ����Q�˨F"���4�j&�0��H�k$�Q%�2jDZF�H�hi5�Q��Z$�0j�Hèe"�V����\��Fz�KK#=ץ������H�uie��\�4�z�[u=�-����F]�uk#=׭��\�6�s��H�uk#=�-����FC�uK��纥��s��h�nm�纵����Fz�[�nm�纕Qz�[�纕Qz�[�纕Qz�[����Oo_�~��+����z����]��Ǯt
����C�\��<�B@��~ ���i�2���β���Bd""�6jq��� ��Q�F-:����k��3xz�+�׷�m{v������3�m�/��^��������,|_�|��+?�����Ń�����l�����u�G߶��o����+���|%n��+i�_�<�
ַn����u��hЄ����*���O/�?��
�|���W̓�D�G�U�*Q�
T#
>b���Da���JF��e����A-��.�j��u|P���1�y�}-@�����W���7���c_��P��[ j�}�@-�o	�e��{Yg�
P���u��u��u���W#��2��Zf�#P��{j�}���O�)�~��]An'�W�����P��O�It@=	@���I :��A�$B:�$W{� G{�h���&O{�jgO{�i������j�jW{� [���l����KH���};t���ݗO�>|�|]�=���cy������#�Y��v��,��Q,G�����@#����r��q;��ף��C8��UG�MG�]G�����P�#Q�"�#G��"�#'��"�#��'ߣ��Ct��Qu��j�}��#\��#<�t��Q�<_�%���Q�<_9e����+ǣ����������|�x�y��=$���!q��lI�|e{ϰ<�X��LF�k������c+��s��c�rEsǆHG���1 h��x��2�^� h�Č����� h�@Y�)��d:���@АIAC&AeĒ�|�����?�}��<��u3���Gx�l.Q�#��,��#�6�\9�~��IH�TLY�������o1i�~p�o�8�9"|��a��c�8ρ��B����pĆ�pĆ}�-��bv��e�~p�o/�#|{��c/I�l��^6�pĆ�pĆ}�-��bv��u�~p�o_G��5rĎ}M*Ʒ/� �?��H;g��8d��W��9o��J� ��W���_����K� �^:l�b�(mԢ٨EŊ��Z�D~-j� ��P�_�*�עV
�kQ��N-:���+.�h��Z�H~-Z� �-S�_�V(��E��Z��!�hX�S�N��ע
�k�#����Z�̣�Q�^8įEJ��1�a)#h��RA�Z�	��:�b�c���LGВ2Y��X�����~"��E�p;�ڂI+���`�RFm¤��څY˨m���ڇY˨���LQ1K��6b�2Em�,e�ڈY����Q1k���Q1k���Q1KQ1KQ1KQ��RF�l��5��e�l��Q��ZF�fFe�S�ys��y�+�� �`�{�y ��w��� �<�{�y �%��w��_��{��?O��{?v�m~j��Z�B~-����b�ݽ~-�ݻQ��w�|��F-$�z{���ٯ��Dn-$�jۭ�^m�����m�x���B���j����Z`��F-b� ��W�~-"���ZD^m������ky��S����Z$^x�i%^xx鹕�׍�H��E/<��HⅧ�I����"��~-2/<wj�y�S�ظ|��k���?Wސ٨o�lԂ7d�ZԄ��?������=�9l�آ�W��N��\^t�72��^��O���z)O��Sm�|j�o������~�v zk1�:��^A~D�6]��Q%�����Dm��s*܉�1!�AĻ-��D��A�Q7
��T�wj�}翋���(�P���
���3��l�Y��g�Z?{`���٣��l�ٓ��n��ڶ&s,za��.̚cQ�5Ǣ�|��芶�b����X����*82k�
N̚�����i;�i�F�8�i�h�-)N}Z'��N}Z'�#ƹO�c�8�i5=�>��g���Z�i��jy��O�陦>��g�����S�V�s��jz�}ZmϩO��9�i�<�ԧ���S�V�3�}ZM�<�i�<�ԧ�������S�V�s��j{N}ZMϩO��Y�>��g���Z�M�@|\B��*��; �{U�&D�{U�V�\����q�S��ig��U�ꁸ������Hÿ'"��9O˿f-��z ����oDZ��H�p����Z�C�@\��h��L��?
�������̚�����-�A�ի6i������Bb���A�G����F��X'p���(�I����X'xoŲ=b�Ų=b�Ų=b�Ų=b��r<��(��!�X�G��2=�����m�۬r{ʱ1	ǃ�#`������� �6�p�w;6�N��,��ɸkg<��VƷ�_�������Jg;��y�f�)k�q*���1V�8Wb���w����'v�9kf�#����9�g�^u2.������9��T��~�������ExO�W�=]�&���TS��j�hǠ�u�����h�{��FG�5PqpfV�+,���3�*�{�Z 樾@a�c�@�qX �a,rl���ʱ%�[�@̱X ��)f��1�f��c�@�N���f:��s��i	�_���o���1>MC�q8�	�]e�F�ǡ�Z�>Gá�8�X�q8���q ���@���7���a c�q�}2&�����a c�q�(�w�d�>��|��8��q�|2E��LP��d�>����@&�q<��>��|���1�?��͛����d      W      x�3��M��2����1z\\\ .gP      ]   !  x�}��n[1Eg�_��DI?�%k� ��@��~��u_"[p �Jz�]�^޾�������~���?�z��_�?/�߮��w�k��k��Xܱl�wl0�b<ʳG}k]K�NZ���sZ�^`d��¡+����8Yawp�s�l]�̡{׃�v���07�v��I7Q�I7aछ�̡�D#����{i7छഛ	N�Y���7��n���n���FP����3���3A-ha�W��V4w�|.���f%(�FP*��1I>4I��>ς/ȼ���L�b��؋� �H�����b�jg�-I�<J��tj��r���D��%�;-%Z�ZZ��/��h�2��h��"��&�d% JCV�D��(Z ��Q�c�Ⱥ��H�T�=:M�ܣ�4>��Ɖ&kx��V�����jΜG�՜��f�����k����+s��I����дpҍp����,p�M5��n���n��k7���[['�� '��N�Y̡��>�t3�}�v��t�{ڍ��"y���{&�|��al�y���KO�0r��c�:�=��g��J�P+�\}����G+�\~E�j2E�b�*�-Zf�[�S���Evk+�J�`+��}�����-�c��=�c��M�c��]�cWKG�y��)�"�.b��ԦƱ�iS��촩q�Y~.��a{���qB���:��8�,��iڒvZ��i��t3�Ó�qz҇�8e�0������(r�9G(��9CiE�!J+rNG��I4S���DQ- �e���VT9JiE��T��S�(z�^�����      Q   '   x�3��2��2���2���2���2� �1z\\\ _<�      S   7   x����0�7���eR>zq�u(�����&���R[)�2�����*�y���      U   �   x�%��
�0ϻO�'�?�h<ZT�K�	I�ŷ7��2�0
{�3Gc��H��Kl�|X��ԃ���8.p0��o.���[�
'��Ts��*�M̤��>i�Pv�s�t�8���^�T���~���?:^g$�A.+�      Y   �   x�%��
!������(rf���&�ŐB�6R���'�����{��c�j)�O%��q�g�7�v�i�I�����Mȏ�%�P�b�����և�2���t�=�<]�'I@%��:����cED_�-:      a   r   x�M��@0��Ӈe���Ib�4�P�^�"��Z]:�����
z�+��Zϻ2[�ydQ
�c0��θ�o�q�9acq�����酰���\��R������m�;\5fB��b4�     