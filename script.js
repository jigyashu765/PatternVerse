const patterns = {
    "Right Triangle (Stars)": (n) => {
        let result = '';
        for (let i = 1; i <= n; i++) result += '* '.repeat(i) + '\n';
        return result;
    },
    "Left Triangle": (n) => {
        let result = '';
        for (let i = 1; i <= n; i++) result += '  '.repeat(n - i) + '* '.repeat(i) + '\n';
        return result;
    },
    "Full Pyramid": (n) => {
        let result = '';
        for (let i = 1; i <= n; i++) result += '  '.repeat(n - i) + '* '.repeat(2 * i - 1) + '\n';
        return result;
    },
    "Inverted Pyramid": (n) => {
        let result = '';
        for (let i = n; i >= 1; i--) result += '  '.repeat(n - i) + '* '.repeat(2 * i - 1) + '\n';
        return result;
    },
    "Diamond Shape": (n) => {
        let result = '';
        for (let i = 1; i <= n; i++) result += '  '.repeat(n - i) + '* '.repeat(2 * i - 1) + '\n';
        for (let i = n - 1; i >= 1; i--) result += '  '.repeat(n - i) + '* '.repeat(2 * i - 1) + '\n';
        return result;
    },
    "Hollow Square": (n) => {
        return '* '.repeat(n) + '\n' + ('* ' + '  '.repeat(n - 2) + '* \n').repeat(n - 2) + '* '.repeat(n) + '\n';
    },
    "Hollow Pyramid": (n) => {
        let result = '';
        for (let i = 1; i <= n; i++) {
            if (i === 1 || i === n) result += '  '.repeat(n - i) + '* '.repeat(2 * i - 1) + '\n';
            else result += '  '.repeat(n - i) + '* ' + '  '.repeat(2 * i - 3) + '* \n';
        }
        return result;
    },
    "Number Pyramid": (n) => {
        let result = '';
        for (let i = 1; i <= n; i++) result += '  '.repeat(n - i) + Array.from({ length: i }, (_, j) => j + 1).join(' ') + '\n';
        return result;
    },
    "Reverse Number Pyramid": (n) => {
        let result = '';
        for (let i = n; i >= 1; i--) result += '  '.repeat(n - i) + Array.from({ length: i }, (_, j) => j + 1).join(' ') + '\n';
        return result;
    },
    "Pascal’s Triangle": (n) => {
        let result = '';
        let pascal = [[1]];
        for (let i = 1; i < n; i++) {
            let prev = pascal[pascal.length - 1];
            let next = [1];
            for (let j = 1; j < i; j++) next.push(prev[j - 1] + prev[j]);
            next.push(1);
            pascal.push(next);
        }
        for (let i = 0; i < n; i++) result += '  '.repeat(n - i - 1) + pascal[i].join(' ') + '\n';
        return result;
    },
    "Square of Stars": (n) => '* '.repeat(n) + '\n'.repeat(n),
    "Diagonal Line": (n) => {
        let result = '';
        for (let i = 0; i < n; i++) result += '  '.repeat(i) + '* \n';
        return result;
    },
    "Reverse Diagonal Line": (n) => {
        let result = '';
        for (let i = 0; i < n; i++) result += '  '.repeat(n - i - 1) + '* \n';
        return result;
    },
    "Cross (X Shape)": (n) => {
        let result = '';
        for (let i = 0; i < n; i++) {
            result += '  '.repeat(i) + '* ' + '  '.repeat(n - 2 * i - 1) + (i !== n - i - 1 ? '* ' : '') + '\n';
            if (i === Math.floor(n / 2)) break;
        }
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) result += '  '.repeat(i) + '* ' + '  '.repeat(n - 2 * i - 1) + '* \n';
        return result;
    },
    "Plus Sign": (n) => {
        let result = '';
        let mid = Math.floor(n / 2);
        for (let i = 0; i < n; i++) {
            if (i === mid) result += '* '.repeat(n) + '\n';
            else result += '  '.repeat(mid) + '* \n';
        }
        return result;
    },
    "Hourglass": (n) => {
        let result = '';
        for (let i = n; i >= 1; i--) result += '  '.repeat(n - i) + '* '.repeat(2 * i - 1) + '\n';
        for (let i = 2; i <= n; i++) result += '  '.repeat(n - i) + '* '.repeat(2 * i - 1) + '\n';
        return result;
    },
    "Zigzag Line": (n) => {
        let result = '';
        for (let i = 0; i < n; i++) result += '  '.repeat(i % 3) + '* \n';
        return result;
    },
    "Spiral Square": (n) => {
        let result = Array(n).fill().map(() => Array(n).fill('  '));
        let top = 0, bottom = n - 1, left = 0, right = n - 1, count = 0;
        while (top <= bottom && left <= right) {
            for (let i = left; i <= right; i++) result[top][i] = '* ';
            top++;
            for (let i = top; i <= bottom; i++) result[i][right] = '* ';
            right--;
            for (let i = right; i >= left; i--) result[bottom][i] = '* ';
            bottom--;
            for (let i = bottom; i >= top; i--) result[i][left] = '* ';
            left++;
        }
        return result.map(row => row.join('')).join('\n') + '\n';
    },
    "Chessboard": (n) => {
        let result = '';
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) result += (i + j) % 2 === 0 ? '* ' : '  ';
            result += '\n';
        }
        return result;
    },
    "Arrow Pointing Right": (n) => {
        let result = '';
        for (let i = 1; i <= n; i++) result += '  '.repeat(n - i) + '* '.repeat(i) + '\n';
        for (let i = n - 1; i >= 1; i--) result += '  '.repeat(n - i) + '* '.repeat(i) + '\n';
        return result;
    },
    "Arrow Pointing Left": (n) => {
        let result = '';
        for (let i = 1; i <= n; i++) result += '* '.repeat(i) + '\n';
        for (let i = n - 1; i >= 1; i--) result += '* '.repeat(i) + '\n';
        return result;
    },
    "Heart Shape": (n) => {
        let result = '';
        for (let i = n / 2; i <= n; i += 2) result += '  '.repeat(n - i) + '* '.repeat(i) + '  '.repeat(n - 2 * i) + '* '.repeat(i) + '\n';
        for (let i = n; i >= 1; i--) result += '  '.repeat(n - i) + '* '.repeat(2 * i - 1) + '\n';
        return result;
    },
    "Circle Approximation": (n) => {
        let result = '';
        for (let i = -n; i <= n; i++) {
            let stars = Math.round(Math.sqrt(n * n - i * i));
            result += '  '.repeat(n - stars) + '* '.repeat(stars * 2) + '\n';
        }
        return result;
    },
    "Wave Pattern": (n) => {
        let result = '';
        for (let i = 0; i < n; i++) result += '  '.repeat(Math.abs(Math.sin(i) * n / 2)) + '* \n';
        return result;
    },
    "Stairs": (n) => {
        let result = '';
        for (let i = 1; i <= n; i++) result += '* '.repeat(i) + '\n';
        return result;
    },
    "Reverse Stairs": (n) => {
        let result = '';
        for (let i = n; i >= 1; i--) result += '* '.repeat(i) + '\n';
        return result;
    },
    "Alternating Numbers": (n) => {
        let result = '';
        for (let i = 1; i <= n; i++) result += String(i).repeat(i) + ' \n';
        return result;
    },
    "Alphabet Pyramid": (n) => {
        let result = '';
        for (let i = 0; i < n; i++) result += '  '.repeat(n - i - 1) + Array.from({ length: i + 1 }, (_, j) => String.fromCharCode(65 + j)).join(' ') + '\n';
        return result;
    },
    "Reverse Alphabet Pyramid": (n) => {
        let result = '';
        for (let i = n - 1; i >= 0; i--) result += '  '.repeat(n - i - 1) + Array.from({ length: i + 1 }, (_, j) => String.fromCharCode(65 + j)).join(' ') + '\n';
        return result;
    },
    "Hollow Diamond": (n) => {
        let result = '';
        for (let i = 1; i <= n; i++) {
            if (i === 1) result += '  '.repeat(n - i) + '* \n';
            else result += '  '.repeat(n - i) + '* ' + '  '.repeat(2 * i - 3) + '* \n';
        }
        for (let i = n - 1; i >= 1; i--) {
            if (i === 1) result += '  '.repeat(n - i) + '* \n';
            else result += '  '.repeat(n - i) + '* ' + '  '.repeat(2 * i - 3) + '* \n';
        }
        return result;
    },
    "Butterfly Shape": (n) => {
        let result = '';
        for (let i = 1; i <= n; i++) result += '* '.repeat(i) + '  '.repeat(2 * (n - i)) + '* '.repeat(i) + '\n';
        for (let i = n - 1; i >= 1; i--) result += '* '.repeat(i) + '  '.repeat(2 * (n - i)) + '* '.repeat(i) + '\n';
        return result;
    },
    "Christmas Tree": (n) => {
        let result = '';
        for (let i = 1; i <= n; i++) result += '  '.repeat(n - i) + '* '.repeat(2 * i - 1) + '\n';
        result += '  '.repeat(n - 1) + '* \n'.repeat(2);
        return result;
    },
    "Spiral Numbers": (n) => {
        let result = Array(n).fill().map(() => Array(n).fill('  '));
        let num = 1, top = 0, bottom = n - 1, left = 0, right = n - 1;
        while (top <= bottom && left <= right) {
            for (let i = left; i <= right; i++) result[top][i] = (num++) + ' ';
            top++;
            for (let i = top; i <= bottom; i++) result[i][right] = (num++) + ' ';
            right--;
            for (let i = right; i >= left; i--) result[bottom][i] = (num++) + ' ';
            bottom--;
            for (let i = bottom; i >= top; i--) result[i][left] = (num++) + ' ';
            left++;
        }
        return result.map(row => row.join('')).join('\n') + '\n';
    },
    "Bordered Square": (n) => {
        return '* '.repeat(n) + '\n' + ('* ' + '  '.repeat(n - 2) + '* \n').repeat(n - 2) + '* '.repeat(n) + '\n';
    },
    "Checkerboard Numbers": (n) => {
        let result = '';
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) result += (i + j) % 2 === 0 ? '1 ' : '0 ';
            result += '\n';
        }
        return result;
    },
    "Hexagon Shape": (n) => {
        let result = '';
        for (let i = 1; i <= n; i++) result += '  '.repeat(n - i) + '* '.repeat(n + i - 1) + '\n';
        for (let i = n - 1; i >= 1; i--) result += '  '.repeat(n - i) + '* '.repeat(n + i - 1) + '\n';
        return result;
    },
    "Right Triangle (Numbers)": (n) => {
        let result = '';
        for (let i = 1; i <= n; i++) result += Array.from({ length: i }, (_, j) => j + 1).join(' ') + '\n';
        return result;
    },
    "Left Triangle (Stars Dec)": (n) => {
        let result = '';
        for (let i = n; i >= 1; i--) result += '  '.repeat(n - i) + '* '.repeat(i) + '\n';
        return result;
    },
    "Kite Shape": (n) => {
        let result = '';
        for (let i = 1; i <= n; i++) result += '  '.repeat(n - i) + '* '.repeat(2 * i - 1) + '\n';
        for (let i = n - 1; i >= 1; i--) result += '  '.repeat(n - i) + '* '.repeat(2 * i - 1) + '\n';
        return result;
    },
    "Snake Pattern": (n) => {
        let result = '';
        for (let i = 0; i < n; i++) result += (i % 2 === 0 ? '* ' : '  ') + '* '.repeat(n - 1) + (i % 2 === 1 ? '* ' : '  ') + '\n';
        return result;
    },
    "Double Pyramid": (n) => {
        let result = '';
        for (let i = 1; i <= n; i++) result += '  '.repeat(n - i) + '* '.repeat(2 * i - 1) + '\n';
        for (let i = n; i >= 1; i--) result += '  '.repeat(n - i) + '* '.repeat(2 * i - 1) + '\n';
        return result;
    },
    "Star Frame": (n) => {
        return '* '.repeat(n) + '\n' + ('* ' + '  '.repeat(n - 2) + '* \n').repeat(n - 2) + '* '.repeat(n) + '\n';
    },
    "Number Frame": (n) => {
        let result = '';
        for (let i = 0; i < n; i++) {
            if (i === 0 || i === n - 1) result += Array.from({ length: n }, (_, j) => j + 1).join(' ') + '\n';
            else result += '1 ' + '  '.repeat(n - 2) + n + ' \n';
        }
        return result;
    },
    "Swastik Shape": (n) => {
        let result = '';
        let mid = Math.floor(n / 2);
        for (let i = 0; i < n; i++) {
            if (i === 0) result += '* '.repeat(n) + '\n';
            else if (i < mid) result += '* ' + '  '.repeat(mid - 1) + '* \n';
            else if (i === mid) result += '* '.repeat(n) + '\n';
            else if (i > mid) result += '  '.repeat(mid) + '* ' + '  '.repeat(n - mid - 1) + '* \n';
        }
        return result;
    },
    "Infinity Symbol": (n) => {
        let result = '';
        for (let i = 0; i < n; i++) {
            if (i === 0 || i === n - 1) result += '* ' + '  '.repeat(n - 2) + '* \n';
            else if (i < n / 2) result += '  '.repeat(i) + '* ' + '  '.repeat(n - 2 - 2 * i) + '* ' + '  '.repeat(i) + '* \n';
            else result += '  '.repeat(n - i - 1) + '* ' + '  '.repeat(2 * (i - n / 2)) + '* ' + '  '.repeat(n - i - 1) + '* \n';
        }
        return result;
    },
    "Fish Shape": (n) => {
        let result = '';
        for (let i = 1; i <= n; i++) result += '  '.repeat(n - i) + '* '.repeat(i) + '\n';
        for (let i = n - 1; i >= 1; i--) result += '  '.repeat(n - i) + '* '.repeat(i) + '\n';
        return result;
    },
    "House Shape": (n) => {
        let result = '';
        for (let i = 1; i <= n; i++) result += '  '.repeat(n - i) + '* '.repeat(2 * i - 1) + '\n';
        result += '* '.repeat(2 * n - 1) + '\n'.repeat(n);
        return result;
    },
    "Rocket Shape": (n) => {
        let result = '';
        for (let i = 1; i <= n; i++) result += '  '.repeat(n - i) + '* '.repeat(2 * i - 1) + '\n';
        result += '* '.repeat(2) + '\n'.repeat(n);
        return result;
    },
    "Smiley Face": (n) => {
        let result = '';
        for (let i = -n; i <= n; i++) {
            let stars = Math.round(Math.sqrt(n * n - i * i));
            if (i === -n / 2 || i === n / 2) result += '  '.repeat(n - stars) + '* ' + '  '.repeat(stars - 2) + '* ' + '  '.repeat(stars - 1) + '\n';
            else if (i === 0) result += '  '.repeat(n - stars) + '* '.repeat(stars) + '  ' + '* '.repeat(stars - 1) + '\n';
            else result += '  '.repeat(n - stars) + '* '.repeat(stars * 2) + '\n';
        }
        return result;
    },
    "Random Pattern": (n) => {
        let result = '';
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) result += Math.random() > 0.5 ? '* ' : '  ';
            result += '\n';
        }
        return result;
    }
};

let selectedPattern = "Right Triangle (Stars)";

document.querySelectorAll('.pattern-table td').forEach(cell => {
    cell.addEventListener('click', () => {
        selectedPattern = cell.textContent;
        generatePattern();
    });
});

function generatePattern() {
    const length = parseInt(document.getElementById('patternLength').value);
    if (length < 5 || length > 20) {
        alert("Enter Pattern Length Between 5 & 20 Only");
        return;
    }

    const patternFunc = patterns[selectedPattern];
    if (!patternFunc) {
        alert("Selected pattern is not implemented yet.");
        return;
    }

    const output = patternFunc(length);
    document.getElementById('patternDisplay').textContent = output;

    // Extract the function body without the declaration
    const functionBody = patternFunc
        .toString()
        .split('\n') // Split into lines
        .slice(1, -1) // Remove the first and last lines (function definition and closing brace)
        .join('\n    ') // Join with proper indentation
        .replace(/let result = '';\s*/, ''); // Remove duplicate declaration

    // Generate the code
    const code = `
function ${selectedPattern.toLowerCase().replace(/[^a-z0-9]/gi, '')}(n) {
    let result = '';
${functionBody}
}

// Example usage:
console.log(${selectedPattern.toLowerCase().replace(/[^a-z0-9]/gi, '')}(${length}));


//Developed by Team Jr
    `;

    document.getElementById('codeDisplay').textContent = code;
}

function copyPattern() {
    const patternText = document.getElementById('codeDisplay').textContent;
    navigator.clipboard.writeText(patternText)
        .then(() => {
            alert('Pattern Code copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            alert('Failed to copy pattern');
        });
}

// Initial generation
generatePattern();