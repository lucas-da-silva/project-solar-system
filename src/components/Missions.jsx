import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div className="container-missions" data-testid="missions">
        <div className="title-missions">
          <Title headline="Missões" />
        </div>
        <div className="missions-cards">
          {missions.map(({ name, year, country, destination }) => (<MissionCard
            key={ name }
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
          />))}
        </div>
      </div>
    );
  }
}

export default Missions;
