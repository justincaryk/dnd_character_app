exports.up = knex =>
  knex.schema.raw(`
          drop table app_character.skills_selected;
          drop type skill_level_sel;
          
          create type skill_level_sel as enum('half', 'prof', 'exp');
          
          create table app_character.skills_selected(
            skill_sel_id uuid primary key default uuid_generate_v4(),
            character_id uuid references app_character.character(character_id) not null,
            user_id uuid references public.minion(id) default current_setting('jwt.claims.user_id')::uuid,
            granting_class_feat_id uuid references public.class_features(id),
            granting_subcclass_feat_id uuid references public.subclass_features(id),
            granted_by_starting_prof boolean default false,
            skill_id uuid references public.skills(id),
            level skill_level_sel default 'prof'
          );
          
          CREATE POLICY select_skills_sel_policy on app_character.skills_selected
              FOR SELECT
              TO role_minion
              USING (user_id = current_setting('jwt.claims.user_id')::uuid);
            
          GRANT SELECT ON app_character.skills_selected TO role_minion;

          CREATE POLICY insert_skills_sel_policy ON app_character.skills_selected
            FOR INSERT
            WITH CHECK (user_id = current_setting('jwt.claims.user_id')::uuid);
                        
          GRANT INSERT ON app_character.skills_selected TO role_minion;

          CREATE POLICY update_skills_sel_policy ON app_character.skills_selected
            FOR UPDATE
            USING (user_id = current_setting('jwt.claims.user_id')::uuid);
            
          GRANT UPDATE ON app_character.skills_selected TO role_minion;

          CREATE POLICY delete_skills_sel_policy ON app_character.skills_selected
            FOR DELETE
            USING (user_id = current_setting('jwt.claims.user_id')::uuid);
            
          GRANT DELETE ON app_character.skills_selected TO role_minion;

          -- fight_style_selected policies

          drop table app_character.fight_style_selected;

          create table app_character.fight_style_selected(
            fight_style_sel_id uuid primary key default uuid_generate_v4(),
            fight_style_id uuid references public.fighting_style(fighting_style_id),
            user_id uuid references public.minion(id),
            character_id uuid references app_character.character(character_id)
          );

          CREATE POLICY select_fight_style_selected_policy on app_character.fight_style_selected
              FOR SELECT
              TO role_minion
              USING (user_id = current_setting('jwt.claims.user_id')::uuid);
            
          GRANT SELECT ON app_character.fight_style_selected TO role_minion;

          CREATE POLICY insert_fight_style_selected_policy ON app_character.fight_style_selected
            FOR INSERT
            WITH CHECK (user_id = current_setting('jwt.claims.user_id')::uuid);
                        
          GRANT INSERT ON app_character.fight_style_selected TO role_minion;

          CREATE POLICY update_fight_style_selected_policy ON app_character.fight_style_selected
            FOR UPDATE
            USING (user_id = current_setting('jwt.claims.user_id')::uuid);
            
          GRANT UPDATE ON app_character.fight_style_selected TO role_minion;

          CREATE POLICY delete_fight_style_selected_policy ON app_character.fight_style_selected
            FOR DELETE
            USING (user_id = current_setting('jwt.claims.user_id')::uuid);
            
          GRANT DELETE ON app_character.fight_style_selected TO role_minion;

        `)

exports.down = knex => knex.schema.raw(``)
