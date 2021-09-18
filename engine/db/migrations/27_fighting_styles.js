exports.up = knex => (
    knex.schema
        .raw(`
            create table fighting_style (
                fighting_style_id uuid default uuid_generate_v4(),
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
        `)
)

exports.down = knex => (
    knex.schema.dropTable('fighting_style')
)