import React from 'react';
import moment from 'moment';
import { inject, observer } from 'mobx-react';

const Duration = ({ d }) => {
  let h = d.hours(),
    m = d.minutes(),
    s = d.seconds();

  [h, m, s] = [h, m, s].map(n => (n < 10 ? `0${n}` : n));

  return (
    <code>
      {h}:{m}:{s}
    </code>
  );
};

const Timer = inject('clock')(observer(({ until, clock }) => {
  const duration = moment.duration(until.diff(clock.time));

  return (
    <div>
      {until.calendar()} comes in <Duration d={duration} />
    </div>
  );
}));

export default Timer;
