const getScore = require('../puzzle').getScore;
const updateScore = require('../puzzle').updateScore;

test('getScore', () => {
    document.getElementById('score').textContent = 'Score: 18';

    expect(getScore()).toBe(18);
});

test('updateScore', () => {
    updateScore(18);

    expect(document.getElementById('score').text()).toEqual('Score: 18');
});