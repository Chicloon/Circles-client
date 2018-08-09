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

  nextConpanion = (e) => {
    e.preventDefault();
    console.log('searching next partner');
    // Тут должен быть метод поиска нового партнера
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
            <img
              style={{ padding: '2rem 6rem' }}
              className="card-img-top"
              src={profilePic}
              alt=""
            />
            <List>
              <ListHeader active text={name} />
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
              <a className="btn btn-block" href="" onClick={e => this.nextConpanion(e)}>
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
