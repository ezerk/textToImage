const path = require('path')
const {trimCanvas, capitalize} = require('./utils'); 
const { createCanvas, registerFont } = require('canvas');
registerFont(path.resolve()+'/assets/NHaasGroteskDSStd-75Bd.otf', {family: 'Neue Hass Grotesk'});
registerFont(path.resolve()+'/assets/OathIcons.otf', {family: 'OathIcons'});
function generateCanvas(oathText) {
    oathText = capitalize(oathText.toLowerCase());
    const words = oathText.split(' ');
    const canvas = createCanvas(1600, 1600);
    const ctx = canvas.getContext('2d');
    ctx.font = "70px 'Neue Hass Grotesk'";
    const firstTwoWords = words[0];
    const thirdWord = words[1] + ' ' + words[2];
    ctx.fillText(firstTwoWords, 50, 100);
    ctx.fillText(thirdWord, 50, 160);
    ctx.font = "70px 'OathIcons'";
    ctx.fillStyle = '#006cb7';
    ctx.fillText(':', 25, 100);
    return trimCanvas(canvas);
}

module.exports = generateCanvas;