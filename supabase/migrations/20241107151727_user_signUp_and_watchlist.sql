-- Run 'npx supabase db reset' to add the migration. 

create table
  public.user_data (
    auth_uuid uuid not null,
    username character varying null,
    first_name character varying null,
    last_name character varying null,
    birth_date date null,
    constraint user_data_pkey primary key (auth_uuid),
    constraint user_data_auth_uuid_fkey foreign key (auth_uuid) references auth.users (id)
    constraint birth_date_check check ((birth_date < now()))
    constraint username_check_length check ((length(username) < 50 && length(username) > 0))
    constraint username_check_unique unique (username)
    -- Non-null names
    constraint first_name_check_length check ((length(first_name) > 0))
    constraint last_name_check_length check ((length(last_name) > 0))
  ) tablespace pg_default;

  create table
  public.watchlist (
    user_id uuid not null,
    status public.watch_status null,
    movie_id character varying null,
    movie_title character varying null,
    cinema_name character varying null,
    id bigint not null,
    added timestamp with time zone not null default now(),
    deleted timestamp with time zone null,
    comment text null,
    constraint watchlist_pkey primary key (id),
    constraint watchlist_user_id_fkey foreign key (user_id) references auth.users (id),
    constraint watchlist_comment_check check ((length(comment) < 2500))
  ) tablespace pg_default;