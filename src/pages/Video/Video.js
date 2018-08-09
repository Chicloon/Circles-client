import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { observable, action } from 'mobx';

import moment from 'moment';

import { CenteredLayout } from '../../layouts/CenteredLayout';
import { List, ListItem, ListHeader } from '../../ui/List';
import { LoadSpinner } from '../../ui/LoadSpinner';

// import Timer from './Timer';
import Timer from './Timer';
import profilePic from '../../images/blank-profile.svg';

@inject('UIstore', 'user')
@observer
class Ready extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
    this.UIstore = props.UIstore;
    this.state = { addFive: true };
  }

  @observable duration = moment().add(5, 'm');

  // componentWillMount() {}

  @action
  addMoreTime = (e) => {
    e.preventDefault();
    this.duration.add(5, 'm');
  };

  timerStoped = () => {
    console.log('timer stoped');
  };

  render() {
    const {
      isLoading,
      companionProfile: {
        name, age, status, aim, education, about,
      },
    } = this.user;
    console.log('rendering...');

    console.log('duration', this.duration);
    // if (!isLoading) {
    // if(this.duration === 0 )

    return (
      <CenteredLayout>
        <Timer until={this.duration} />

        <div className="card">
          <img style={{ padding: '2rem 6rem' }} className="card-img-top" src={profilePic} alt="" />
          <div className="card-body">
            <a
              className="btn btn-primary btn-lg btn-block continue"
              href=""
              onClick={e => this.addMoreTime(e)}
            >
              Хочу пообщаться еще 5 мин
            </a>
            <Link to="/video" className="btn btn-block">
              Стоп!
            </Link>
          </div>
          <List>
            <ListHeader text={name} />
            <ListItem>Возраст: {age} </ListItem>
            <ListItem>Статус: {status}</ListItem>
            <ListItem>Цель: {aim}</ListItem>
            <ListItem>Образование: {education} </ListItem>
            <ListItem>О себе: {about}</ListItem>
          </List>
        </div>
      </CenteredLayout>
    );
  }
  // console.log('spinning');
  // return <LoadSpinner />;
}

export default Ready;
