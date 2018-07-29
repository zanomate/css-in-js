export class Position {

    values = {
        STATIC: 'static',
        RELATIVE: 'relative',
        ABSOLUTE: 'absolute',
        FIXED: 'fixed',
        STICKY: 'sticky'
    };

    static STATIC = {position: values.STATIC};
    static RELATIVE = {position: values.RELATIVE};
    static ABSOLUTE = {position: values.ABSOLUTE};
    static FIXED = {position: values.FIXED};
    static STICKY = {position: values.STICKY};

}
