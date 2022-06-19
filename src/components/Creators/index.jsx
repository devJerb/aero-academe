import React from 'react'
import { CreatorsContainer, CreatorsH1, CreatorsCard, CreatorsIcon, CreatorsWrapper, CreatorsH2, Icon } from './CreatorsElements'

const Creators = () => {
    return (
        <>
            <CreatorsContainer>
                <Icon to="/aeronautics">Aircraft Control</Icon>
                <CreatorsH1>Creators</CreatorsH1>
                <CreatorsWrapper>
                    <CreatorsCard>
                            <CreatorsIcon src={require("../../images/creators/Anna.png").default}/>
                        <CreatorsH2>Dela Cruz, Anna Kamill S.</CreatorsH2>
                    </CreatorsCard>
                    <CreatorsCard>
                            <CreatorsIcon src={require("../../images/creators/Rhomel.png").default}/>
                            <CreatorsH2>Martinez Jr., Rhomel A.</CreatorsH2>
                        </CreatorsCard>
                        <CreatorsCard>
                            <CreatorsIcon src={require("../../images/creators/Jeth.png").default}/>
                            <CreatorsH2>Padilla, Jeth Delbert Q.</CreatorsH2>
                        </CreatorsCard>
                        <CreatorsCard>
                            <CreatorsIcon src={require("../../images/creators/Ian.png").default}/>
                            <CreatorsH2>Santillan, Ian L.</CreatorsH2>
                        </CreatorsCard>
                        <CreatorsCard>
                            <CreatorsIcon src={require("../../images/creators/Zyrick.png").default}/>
                            <CreatorsH2>Timmango, Zyrick Laurence E.</CreatorsH2>
                        </CreatorsCard>
                </CreatorsWrapper>
            </CreatorsContainer>
        </>
    )
}

export default Creators