import moment from 'moment';

const countdownDate = '2019-02-18'

const excludeDates = [
    '2018-12-24',
    '2018-12-25',
    '2018-12-26',
    '2019-01-01',
    '2019-01-02',
    '2019-01-28',
    '2019-02-06',
];

const weekdays = [1,2,3,4,5];

export function getDurationUntilEndOfCurrentWorkday(currentTime) {
    const now = moment(currentTime);
    const endOfDay = moment(currentTime).hour(23).minute(0).second(0).millisecond(0);

    const difference = endOfDay.diff(now);

    return difference >= 0 ? moment.duration(difference) : moment.duration(0);
};

export function getDaysRemainingFromTomorrow(currentTime) {
    const tomorrow = moment(currentTime).startOf('day').add(1, 'day');

    let nextDate = tomorrow;
    let daysRemaining = 0;

    while (nextDate.isBefore(countdownDate)) {
        if (dateIsCountable(nextDate)) daysRemaining++;
        nextDate = nextDate.add(1, 'day');
    }

    return daysRemaining;
}

function dateIsCountable(testDate) {
    const isWeekday = weekdays.includes(testDate.day());
    const isNotExcludedDay = excludeDates.findIndex(excludeDate => testDate.isSame(excludeDate)) === -1;
    return isWeekday && isNotExcludedDay;
}