exports.up = knex => (
    knex.schema
        .raw(`
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
            ALTER TABLE race_features ENABLE ROW LEVEL SECURITY;
            ALTER TABLE races ENABLE ROW LEVEL SECURITY;
            ALTER TABLE racial_features ENABLE ROW LEVEL SECURITY;
            ALTER TABLE races ENABLE ROW LEVEL SECURITY;
            ALTER TABLE race_features ENABLE ROW LEVEL SECURITY;
            ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
            ALTER TABLE spell_slugs ENABLE ROW LEVEL SECURITY;
            ALTER TABLE subclasses ENABLE ROW LEVEL SECURITY;
            ALTER TABLE subrace_features ENABLE ROW LEVEL SECURITY;
            ALTER TABLE subraces ENABLE ROW LEVEL SECURITY;
            
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
            GRANT SELECT ON public.skills TO role_minion;
            GRANT SELECT ON public.subclasses TO role_minion;
            GRANT SELECT ON public.spells TO role_minion;
            GRANT SELECT ON public.spell_slugs TO role_minion;
            GRANT SELECT ON public.subrace_features TO role_minion;
            GRANT SELECT ON public.subraces TO role_minion;
        `)
)

exports.down = knex => (
    knex.schema.dropTable('')
)