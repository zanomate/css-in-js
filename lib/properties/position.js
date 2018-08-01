export const Position = (value) => ({position: value});

Position.values = {
    STATIC: 'static',
    RELATIVE: 'relative',
    ABSOLUTE: 'absolute',
    FIXED: 'fixed',
    STICKY: 'sticky'
};

Position.STATIC = Position(Position.values.STATIC);
Position.RELATIVE = Position(Position.values.RELATIVE);
Position.ABSOLUTE = Position(Position.values.ABSOLUTE);
Position.FIXED = Position(Position.values.FIXED);
Position.STICKY = Position(Position.values.STICKY);
