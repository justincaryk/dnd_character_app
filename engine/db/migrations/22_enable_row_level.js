require('dotenv').config()
const { ROLE_ANON } = process.env

exports.up = knex =>
  knex.schema.raw(`
            ALTER TABLE attributes ENABLE ROW LEVEL SECURITY;
            ALTER TABLE bg_features ENABLE ROW LEVEL SECURITY;
            ALTER TABLE bgs ENABLE ROW LEVEL SECURITY;
            ALTER TABLE class_features ENABLE ROW LEVEL SECURITY;
            ALTER TABLE classes ENABLE ROW LEVEL SECURITY;
            ALTER TABLE conditions ENABLE ROW LEVEL SECURITY;
            ALTER TABLE diseases ENABLE ROW LEVEL SECURITY;
            ALTER TABLE equipment ENABLE ROW LEVEL SECURITY;
            ALTER TABLE feats ENABLE ROW LEVEL SECURITY;
            ALTER TABLE languages ENABLE ROW LEVEL SECURITY;
            ALTER TABLE races ENABLE ROW LEVEL SECURITY;
            ALTER TABLE racial_features ENABLE ROW LEVEL SECURITY;
            ALTER TABLE races ENABLE ROW LEVEL SECURITY;
            ALTER TABLE race_features ENABLE ROW LEVEL SECURITY;
            ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
            ALTER TABLE spells ENABLE ROW LEVEL SECURITY;
            ALTER TABLE spell_slugs ENABLE ROW LEVEL SECURITY;
            ALTER TABLE subclasses ENABLE ROW LEVEL SECURITY;
            ALTER TABLE subrace_features ENABLE ROW LEVEL SECURITY;
            ALTER TABLE subraces ENABLE ROW LEVEL SECURITY;
            
            CREATE POLICY attributes_policy ON public.attributes 
                FOR SELECT
                TO role_minion
                USING (true);
            
            CREATE POLICY bg_features_policy ON public.bg_features 
                FOR SELECT
                TO role_minion
                USING (true);
            
            CREATE POLICY bgs_policy ON public.bgs 
                FOR SELECT
                TO role_minion
                USING (true);
            
            CREATE POLICY class_features_policy ON public.class_features 
                FOR SELECT
                TO role_minion
                USING (true);
                
            CREATE POLICY classes_policy ON public.classes 
                FOR SELECT
                TO role_minion
                USING (true);
                
            CREATE POLICY diseases_policy ON public.diseases 
                FOR SELECT
                TO role_minion
                USING (true);
                
            CREATE POLICY equipment_policy ON public.equipment 
                FOR SELECT
                TO role_minion
                USING (true);
                
            CREATE POLICY feats_policy ON public.feats 
                FOR SELECT
                TO role_minion
                USING (true);
                
            CREATE POLICY languages_policy ON public.languages 
                FOR SELECT
                TO role_minion
                USING (true);
                
            CREATE POLICY race_features_policy ON public.racial_features 
                FOR SELECT
                TO role_minion
                USING (true);
                
            CREATE POLICY races_policy ON public.races 
                FOR SELECT
                TO role_minion
                USING (true);
                
            CREATE POLICY race_features_policy ON public.race_features 
                FOR SELECT
                TO role_minion
                USING (true);
                
            CREATE POLICY skills_policy ON public.skills 
                FOR SELECT
                TO role_minion
                USING (true);
                
            CREATE POLICY subclasses_policy ON public.subclasses 
                FOR SELECT
                TO role_minion
                USING (true);
                
            CREATE POLICY spells_policy ON public.spells 
                FOR SELECT
                TO role_minion
                USING (true);
                
            CREATE POLICY spell_slugs_policy ON public.spell_slugs 
                FOR SELECT
                TO role_minion
                USING (true);
                
            CREATE POLICY subrace_features_policy ON public.subrace_features 
                FOR SELECT
                TO role_minion
                USING (true);
                
            CREATE POLICY subraces_policy ON public.subraces 
                FOR SELECT
                TO role_minion
                USING (true);

            CREATE POLICY subclass_features_policy on public.subclass_features
                FOR SELECT
                TO role_minion
                USING (true);
            
            GRANT SELECT ON public.attributes TO role_minion;
            GRANT SELECT ON public.bg_features TO role_minion;
            GRANT SELECT ON public.bgs TO role_minion;
            GRANT SELECT ON public.class_features TO role_minion;
            GRANT SELECT ON public.classes TO role_minion;
            GRANT SELECT ON public.diseases TO role_minion;
            GRANT SELECT ON public.equipment TO role_minion;
            GRANT SELECT ON public.feats TO role_minion;
            GRANT SELECT ON public.languages TO role_minion;
            GRANT SELECT ON public.race_features TO role_minion;
            GRANT SELECT ON public.races TO role_minion;
            GRANT SELECT ON public.race_features TO role_minion;
            GRANT SELECT ON public.racial_features TO role_minion;
            GRANT SELECT ON public.skills TO role_minion;
            GRANT SELECT ON public.subclasses TO role_minion;
            GRANT SELECT ON public.spells TO role_minion;
            GRANT SELECT ON public.spell_slugs TO role_minion;
            GRANT SELECT ON public.subrace_features TO role_minion;
            GRANT SELECT ON public.subclass_features TO role_minion;
            GRANT SELECT ON public.subraces TO role_minion;
        `)

exports.down = knex => knex.schema.dropTable('')
