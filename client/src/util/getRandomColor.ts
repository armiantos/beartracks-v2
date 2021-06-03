import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import lime from '@material-ui/core/colors/lime';
import yellow from '@material-ui/core/colors/yellow';
import amber from '@material-ui/core/colors/amber';
import orange from '@material-ui/core/colors/orange';

const shades = [green, lightGreen, lime, yellow, amber, orange].map((color) => [color[200], color[300], color[400]]).flat();

function getRandomColor(): string {
    return shades[Math.floor(Math.random() * shades.length)];
}

export default getRandomColor;
