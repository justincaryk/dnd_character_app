import gql from "graphql-tag";

export default gql`
    query AllBgs {
        allBgs {
            nodes {
                id
                name
                description
                numberOfExtraLanguages
                languageOptions
                numberOfSkillsGranted
                skillOptions
                numberOfToolsGranted
                toolOptions
                bgFeatureByAlternateBackgroundFeature {
                    name
                    description
                }
                bgFeatureByBackgroundFeature {
                    name
                    description
                }
            }
        }
    }
`

