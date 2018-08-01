export function css(...styles) {
    let composed = {};
    for(const style of styles) {
        composed = Object.assign(composed, style);
    }
    return composed;
}

export function If(condition, styleSuccess, styleFailure) {
    if(condition) {
        return styleSuccess;
    }
    else {
        return styleFailure ? styleFailure : {};
    }
}

export function IfNot(condition, styleSuccess, styleFailure) {
    return If(!condition, styleSuccess, styleFailure);
}

export function List(...styles) {
    let list = {};
    for(const style of styles) {
        for(const property of Object.keys(style)) {
            if(!list.hasOwnProperty(property)) {
                list[property] = [];
            }
            list[property].push(style[property]);
        }
    }
    for(const property of Object.keys(list)) {
        list[property] = list[property].join(', ');
    }
    return list;
}

export function Multi(...styles) {
    let list = {};
    for(const style of styles) {
        for(const property of Object.keys(style)) {
            if(!list.hasOwnProperty(property)) {
                list[property] = [];
            }
            list[property].push(style[property]);
        }
    }
    for(const property of Object.keys(list)) {
        list[property] = list[property].join(' ');
    }
    return list;
}
