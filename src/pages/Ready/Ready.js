import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

import { CenteredLayout } from '../../layouts/CenteredLayout';
import { List, ListItem, ListHeader } from '../../ui/List';
import { LoadSpinner } from '../../ui/LoadSpinner';

import profilePic from '../../images/blank-profile.svg';

@inject('user')
@observer
class Ready extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
  }

  componentWillMount() {
    this.user.fetchCompation();
  }

  submit = (e) => {
    e.preventDefault();
    console.log('sending data');
    this.user.fetchCompation();
  };

  render() {
    const {
      isLoading,
      companionProfile: {
        name, age, status, aim, education, about,
      },
    } = this.user;

    if (!isLoading) {
      return (
        <CenteredLayout title="Найдено соответствие">
          <div className="card">
            <img className="card-img-top" src={profilePic} alt="" />
            <List>
              <ListHeader text={name} />
              <ListItem>Возраст: {age} </ListItem>
              <ListItem>Статус: {status}</ListItem>
              <ListItem>Цель: {aim}</ListItem>
              <ListItem>Образование: {education} </ListItem>
              <ListItem>О себе: {about}</ListItem>
            </List>
            <div className="card-body">
              <Link to="/video" className="btn btn-primary btn-lg btn-block">
                Хочу общаться!
              </Link>
              <a className="btn btn-block" href="" onClick={e => this.submit(e)}>
                Пропустить
              </a>
            </div>
          </div>
        </CenteredLayout>
      );
    }
    console.log('spinning');
    return <LoadSpinner />;
  }
}

export default Ready;
