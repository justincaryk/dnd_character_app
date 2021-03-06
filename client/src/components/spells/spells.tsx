import React from "react";
import { appDictionary } from '../../lib/dictionary';
import './../../scss/Spells.scss';
import Spell from './spell';
import { SpellType } from './../../lib/types'


interface Props { }

interface SpellLevel {
    lvl: string
    active: boolean
}
interface State {
    spellCasters: string[]
    spellLevels: SpellLevel[]
    selectedCaster: string | null
    allSpells: SpellType[]
    filteredSpells: SpellType[]
}

export default class SpellsSelector extends React.Component<Props, State> {
    getAllSpells: () => []
    updateSpellLevelStates: (x: SpellLevel) => void
    handleCasterListSelected: (e: React.ChangeEvent<HTMLSelectElement>) => void
    getCurrentFilteredSpells: any

    constructor(props: Props) {
        super(props);

        this.state = {
            spellCasters: [
                "Sorcerer",
                "Wizard",
                "Bard",
                "Ranger",
                "Cleric",
                "Paladin",
                "Fighter",
                "Druid",
                "Warlock",
            ],
            spellLevels: [{
                    lvl: '0',
                    active: false,
                },
                {
                    lvl: '1',
                    active: false,
                },
                {
                    lvl: '2',
                    active: false,
                },
                {
                    lvl: '3',
                    active: false,
                },
                {
                    lvl: '4',
                    active: false,
                },
                {
                    lvl: '5',
                    active: false,
                },
                {
                    lvl: '6',
                    active: false,
                },
                {
                    lvl: '7',
                    active: false,
                },
                {
                    lvl: '8',
                    active: false,
                },
                {
                    lvl: '9',
                    active: false,
                },
            ],
            selectedCaster: null,
            allSpells: [], // this probably ought to just be Slugs when actually making calls
            filteredSpells: []
        }

        this.updateSpellLevelStates = (clickedSpellLevel: SpellLevel) => {

            let spellLevels = this.state.spellLevels;
            const targetIndex = spellLevels.indexOf(clickedSpellLevel);
            spellLevels[targetIndex].active = !spellLevels[targetIndex].active;

            const filteredSpells = this.getCurrentFilteredSpells(this.state.selectedCaster, this.state.spellLevels);

            this.setState({
                spellLevels: this.state.spellLevels,
                filteredSpells: filteredSpells,
            })
        }

        this.handleCasterListSelected = event => {
            const caster = event.target.value;

            const spells = this.getCurrentFilteredSpells(caster, this.state.spellLevels)

            this.setState({
                filteredSpells: spells,
                selectedCaster: caster,
            })
        }


        this.getAllSpells = () => {
            return appDictionary.SPELLS_FULL;
        }


        this.getCurrentFilteredSpells = (caster: string, spellLevels: SpellLevel[]) => {
            // on initial render, nothing will be present
            if (!spellLevels) {
                return appDictionary.SPELLS_FULL;
            }

            const allSpells: SpellType[] = appDictionary.SPELLS_FULL;
            let filteredSpells: SpellType[] = [];

            type HashTable = {
                filteringByLevel: boolean
                [key: string]: boolean
            }
            // process the spell levels
            let activeSpellLevelHash: HashTable = {
                filteringByLevel: false,
            };
            // make a simple hash for quicker reference when we loop hundreds of spells
            for (const lvl of spellLevels) {
                if (lvl.active) {
                    activeSpellLevelHash.filteringByLevel = true;
                    activeSpellLevelHash[lvl.lvl] = true;
                }
            }

            // this block will handle checking the spell matches both criteria 
            if (activeSpellLevelHash.filteringByLevel && caster) {
                filteredSpells = allSpells.filter(spell => {
                    const eligCasters = spell.dnd_class.split(", ");
                    const levelIsIncluded = activeSpellLevelHash[spell.level_int];

                    return eligCasters.includes(caster) && levelIsIncluded;
                });
            }

            // we're only filtering by spell level
            else if (activeSpellLevelHash.filteringByLevel) {
                filteredSpells = allSpells.filter(spell => activeSpellLevelHash[spell.level_int])
            }

            // we're only filtering by caster
            else if (caster) {
                filteredSpells = allSpells.filter(spell => spell.dnd_class.split(", ").includes(caster));
            }


            return filteredSpells.length || caster ? filteredSpells : allSpells;
        }

    }

    componentDidMount = () => {
        this.setState({
            allSpells: this.getAllSpells(),
            filteredSpells: this.getCurrentFilteredSpells()
        })
    }

    render() {

        const noSpellsFoundMessage = this.state.filteredSpells.length == 0 ? <div className="no-spells">No spells found</div> : "";

        return (
            <div className="space-sequence-20">
                <div className="filter-block space-sequence-20">
                    <div>Filter By:</div>
                    <div>
                        <select className="form-control" onChange={this.handleCasterListSelected}>
                            <option value="">Select a Caster List</option>
                            {this.state.spellCasters.map(caster => {
                                return <option key={'s-c-' + caster} value={caster}>{caster}</option>
                            })}
                        </select>
                    </div>
                    <div className="spell-level-block">
                        {
                            this.state.spellLevels.map(lvl => {
                                return (
                                    <div onClick={() => this.updateSpellLevelStates(lvl)}
                                        className={lvl.active == true ? 'active' : ''}
                                        key={"s-l-" + lvl.lvl}>
                                        <span>- {lvl.lvl} -</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    {
                        this.state.filteredSpells.map(spell => {
                            return (
                                <div className="content-block" key={spell.slug}>
                                    <Spell spell={spell}></Spell>
                                </div>
                            )
                        })
                    }
                    {noSpellsFoundMessage}
                </div>
            </div>
        )
    }
}