import React from 'react';
// import './Feats.scss';

interface FeatInterface {
    id: string
    name: string
    desc: string
    points: string[]
    prereq?: string
}

interface Props {
    feats: FeatInterface[]
}
interface State {
    focusedFeat: FeatInterface
}

export default class Feats extends React.Component<Props, State> {
    handleMethodChange: any

    constructor(props: Props) {

        super(props)

        this.state = {
            focusedFeat: props.feats[0]
        }

        this.handleMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const feat = this.props.feats.filter(feat => feat.id == event.target.value)
            this.setState({focusedFeat: feat[0]})
        }
    }

    render() {

        const { focusedFeat } = this.state
        let prereq: string | null = null

        if (focusedFeat.prereq) {
            prereq = focusedFeat.prereq
        } else {
            prereq = "none"
        }

        return (
            <div className="space-sequence-20">
                <div>
                    <select className="form-control" onChange={this.handleMethodChange}>
                        { this.props.feats.map(f => {
                            return (
                                <option value={f.id} key={f.id}>{f.name}</option>
                            )
                        })}
                    </select>
                </div>

                <div>
                    {focusedFeat.desc}
                </div>

                <div>
                    Prerequisite: {prereq}
                </div>

                {focusedFeat.points && focusedFeat.points.length > 0 &&
                    <ul className="space-sequence-20">  
                        {focusedFeat.points.map((p, i) => {
                            return(
                                <li key={i}>{p}</li>
                            )
                        })}
                    </ul>
                }
            </div>

        );
    }
}
