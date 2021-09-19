exports.up = knex => (
    knex.schema
        .raw(`
            drop table public.asi;

            create table asi (
              asi_id uuid primary key default uuid_generate_v4(),
              long varchar(25),
              short varchar(5)
            );
                    
            ALTER TABLE asi ENABLE ROW LEVEL SECURITY;
                        
            CREATE POLICY asi_policy ON asi 
              FOR SELECT
              TO role_minion
              USING (true);
            
            GRANT SELECT ON asi TO role_minion;
            
            --------------------
            drop table public.fighting_style;
            
            create table fighting_style (
              fighting_style_id uuid primary key default uuid_generate_v4(),
              name varchar,
              source varchar,
              page integer,
              entries json,
              options json
            );
            
            ALTER TABLE fighting_style ENABLE ROW LEVEL SECURITY;
                        
            CREATE POLICY fighting_style_policy ON public.fighting_style 
              FOR SELECT
              TO role_minion
              USING (true);
            
            GRANT SELECT ON public.fighting_style TO role_minion;
            
            -------------------------
            create SCHEMA app_character;
            
            GRANT USAGE ON SCHEMA app_character TO role_minion;
            GRANT SELECT ON ALL TABLES IN SCHEMA app_character TO role_minion;
            
            create table app_character.character (
              character_id uuid primary key default uuid_generate_v4(),
            name varchar(30),
              user_id uuid references public.minion(id) default current_setting('jwt.claims.user_id')::uuid,
              class_id uuid references public.classes(id),
              subclass_id uuid references public.subclasses(id),
              race_id uuid references public.races(id),
              subrace_id uuid references public.subraces(id),
              description json,
              bg_id uuid references public.bgs(id)
            );
            
            ALTER TABLE app_character.character ENABLE ROW LEVEL SECURITY;
            
            CREATE POLICY select_character_policy on app_character.character
              FOR SELECT
              TO role_minion
              USING (user_id = current_setting('jwt.claims.user_id')::uuid);
            
            GRANT SELECT ON app_character.character TO role_minion;

            CREATE POLICY insert_character_policy ON app_character.character
              FOR INSERT
              WITH CHECK (user_id = current_setting('jwt.claims.user_id')::uuid);
                        
            GRANT INSERT ON app_character.character TO role_minion;

            CREATE POLICY update_character_policy ON app_character.character
              FOR UPDATE
              USING (user_id = current_setting('jwt.claims.user_id')::uuid);
            
            GRANT UPDATE ON app_character.character TO role_minion;

            create table app_character.asi_selected(
              asi_sel_id uuid primary key default uuid_generate_v4(),
              character_id uuid references app_character.character(character_id),
              asi_id uuid references public.asi(asi_id),
              count integer
            );
            
            create type skill_level_sel as enum('prof', 'exp');
            
            create table app_character.skills_selected(
              skill_sel_id uuid primary key default uuid_generate_v4(),
              character_id uuid references app_character.character(character_id),
              skill_id uuid references public.skills(id),
              level skill_level_sel
            );
            
            create table app_character.fight_style_selected(
              fight_style_sel_id uuid primary key default uuid_generate_v4(),
              fight_style_id uuid references public.fighting_style(fighting_style_id),
              character_id uuid references app_character.character(character_id)
            );
        
        `)
)

exports.down = knex => (
    knex.schema.raw(``)
)