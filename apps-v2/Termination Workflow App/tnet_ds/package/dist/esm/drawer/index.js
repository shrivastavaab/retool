// lib/drawer/component.tsx
import React4 from "react";

// ../../node_modules/react-swipeable/es/index.js
import * as React from "react";
var LEFT = "Left";
var RIGHT = "Right";
var UP = "Up";
var DOWN = "Down";
var defaultProps = {
  delta: 10,
  preventScrollOnSwipe: false,
  rotationAngle: 0,
  trackMouse: false,
  trackTouch: true,
  swipeDuration: Infinity,
  touchEventOptions: { passive: true }
};
var initialState = {
  first: true,
  initial: [0, 0],
  start: 0,
  swiping: false,
  xy: [0, 0]
};
var mouseMove = "mousemove";
var mouseUp = "mouseup";
var touchEnd = "touchend";
var touchMove = "touchmove";
var touchStart = "touchstart";
function getDirection(absX, absY, deltaX, deltaY) {
  if (absX > absY) {
    if (deltaX > 0) {
      return RIGHT;
    }
    return LEFT;
  } else if (deltaY > 0) {
    return DOWN;
  }
  return UP;
}
function rotateXYByAngle(pos, angle) {
  if (angle === 0)
    return pos;
  const angleInRadians = Math.PI / 180 * angle;
  const x = pos[0] * Math.cos(angleInRadians) + pos[1] * Math.sin(angleInRadians);
  const y = pos[1] * Math.cos(angleInRadians) - pos[0] * Math.sin(angleInRadians);
  return [x, y];
}
function getHandlers(set, handlerProps) {
  const onStart = (event) => {
    const isTouch = "touches" in event;
    if (isTouch && event.touches.length > 1)
      return;
    set((state, props) => {
      if (props.trackMouse && !isTouch) {
        document.addEventListener(mouseMove, onMove);
        document.addEventListener(mouseUp, onUp);
      }
      const { clientX, clientY } = isTouch ? event.touches[0] : event;
      const xy = rotateXYByAngle([clientX, clientY], props.rotationAngle);
      props.onTouchStartOrOnMouseDown && props.onTouchStartOrOnMouseDown({ event });
      return Object.assign(Object.assign(Object.assign({}, state), initialState), { initial: xy.slice(), xy, start: event.timeStamp || 0 });
    });
  };
  const onMove = (event) => {
    set((state, props) => {
      const isTouch = "touches" in event;
      if (isTouch && event.touches.length > 1) {
        return state;
      }
      if (event.timeStamp - state.start > props.swipeDuration) {
        return state.swiping ? Object.assign(Object.assign({}, state), { swiping: false }) : state;
      }
      const { clientX, clientY } = isTouch ? event.touches[0] : event;
      const [x, y] = rotateXYByAngle([clientX, clientY], props.rotationAngle);
      const deltaX = x - state.xy[0];
      const deltaY = y - state.xy[1];
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);
      const time = (event.timeStamp || 0) - state.start;
      const velocity = Math.sqrt(absX * absX + absY * absY) / (time || 1);
      const vxvy = [deltaX / (time || 1), deltaY / (time || 1)];
      const dir = getDirection(absX, absY, deltaX, deltaY);
      const delta = typeof props.delta === "number" ? props.delta : props.delta[dir.toLowerCase()] || defaultProps.delta;
      if (absX < delta && absY < delta && !state.swiping)
        return state;
      const eventData = {
        absX,
        absY,
        deltaX,
        deltaY,
        dir,
        event,
        first: state.first,
        initial: state.initial,
        velocity,
        vxvy
      };
      eventData.first && props.onSwipeStart && props.onSwipeStart(eventData);
      props.onSwiping && props.onSwiping(eventData);
      let cancelablePageSwipe = false;
      if (props.onSwiping || props.onSwiped || props[`onSwiped${dir}`]) {
        cancelablePageSwipe = true;
      }
      if (cancelablePageSwipe && props.preventScrollOnSwipe && props.trackTouch && event.cancelable) {
        event.preventDefault();
      }
      return Object.assign(Object.assign({}, state), {
        // first is now always false
        first: false,
        eventData,
        swiping: true
      });
    });
  };
  const onEnd = (event) => {
    set((state, props) => {
      let eventData;
      if (state.swiping && state.eventData) {
        if (event.timeStamp - state.start < props.swipeDuration) {
          eventData = Object.assign(Object.assign({}, state.eventData), { event });
          props.onSwiped && props.onSwiped(eventData);
          const onSwipedDir = props[`onSwiped${eventData.dir}`];
          onSwipedDir && onSwipedDir(eventData);
        }
      } else {
        props.onTap && props.onTap({ event });
      }
      props.onTouchEndOrOnMouseUp && props.onTouchEndOrOnMouseUp({ event });
      return Object.assign(Object.assign(Object.assign({}, state), initialState), { eventData });
    });
  };
  const cleanUpMouse = () => {
    document.removeEventListener(mouseMove, onMove);
    document.removeEventListener(mouseUp, onUp);
  };
  const onUp = (e) => {
    cleanUpMouse();
    onEnd(e);
  };
  const attachTouch = (el, props) => {
    let cleanup = () => {
    };
    if (el && el.addEventListener) {
      const baseOptions = Object.assign(Object.assign({}, defaultProps.touchEventOptions), props.touchEventOptions);
      const tls = [
        [touchStart, onStart, baseOptions],
        // preventScrollOnSwipe option supersedes touchEventOptions.passive
        [
          touchMove,
          onMove,
          Object.assign(Object.assign({}, baseOptions), props.preventScrollOnSwipe ? { passive: false } : {})
        ],
        [touchEnd, onEnd, baseOptions]
      ];
      tls.forEach(([e, h, o]) => el.addEventListener(e, h, o));
      cleanup = () => tls.forEach(([e, h]) => el.removeEventListener(e, h));
    }
    return cleanup;
  };
  const onRef = (el) => {
    if (el === null)
      return;
    set((state, props) => {
      if (state.el === el)
        return state;
      const addState = {};
      if (state.el && state.el !== el && state.cleanUpTouch) {
        state.cleanUpTouch();
        addState.cleanUpTouch = void 0;
      }
      if (props.trackTouch && el) {
        addState.cleanUpTouch = attachTouch(el, props);
      }
      return Object.assign(Object.assign(Object.assign({}, state), { el }), addState);
    });
  };
  const output = {
    ref: onRef
  };
  if (handlerProps.trackMouse) {
    output.onMouseDown = onStart;
  }
  return [output, attachTouch];
}
function updateTransientState(state, props, previousProps, attachTouch) {
  if (!props.trackTouch || !state.el) {
    if (state.cleanUpTouch) {
      state.cleanUpTouch();
    }
    return Object.assign(Object.assign({}, state), { cleanUpTouch: void 0 });
  }
  if (!state.cleanUpTouch) {
    return Object.assign(Object.assign({}, state), { cleanUpTouch: attachTouch(state.el, props) });
  }
  if (props.preventScrollOnSwipe !== previousProps.preventScrollOnSwipe || props.touchEventOptions.passive !== previousProps.touchEventOptions.passive) {
    state.cleanUpTouch();
    return Object.assign(Object.assign({}, state), { cleanUpTouch: attachTouch(state.el, props) });
  }
  return state;
}
function useSwipeable(options) {
  const { trackMouse } = options;
  const transientState = React.useRef(Object.assign({}, initialState));
  const transientProps = React.useRef(Object.assign({}, defaultProps));
  const previousProps = React.useRef(Object.assign({}, transientProps.current));
  previousProps.current = Object.assign({}, transientProps.current);
  transientProps.current = Object.assign(Object.assign({}, defaultProps), options);
  let defaultKey;
  for (defaultKey in defaultProps) {
    if (transientProps.current[defaultKey] === void 0) {
      transientProps.current[defaultKey] = defaultProps[defaultKey];
    }
  }
  const [handlers, attachTouch] = React.useMemo(() => getHandlers((stateSetter) => transientState.current = stateSetter(transientState.current, transientProps.current), { trackMouse }), [trackMouse]);
  transientState.current = updateTransientState(transientState.current, transientProps.current, previousProps.current, attachTouch);
  return handlers;
}

// lib/drawer/component.tsx
import {
  Drawer as MuiDrawer,
  SwipeableDrawer as MuiSwipeableDrawer
} from "@mui/material";
import useMediaQuery2 from "@mui/material/useMediaQuery";

// lib/buttons/component.tsx
import React3 from "react";
import {
  Button as MuiButton,
  Fab as MuiFab,
  ButtonGroup as MuiButtonGroup,
  Box as Box2
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme as useTheme2 } from "@mui/material/styles";

// lib/buttons/theme.ts
import { styled } from "@mui/material/styles";
import { Button as _MuiButton, IconButton } from "@mui/material";

// lib/layout/index.ts
import { Box, Stack, Grid2 } from "@mui/material";

// lib/utils/components.tsx
import { jsx } from "react/jsx-runtime";

// lib/utils/index.ts
var COLORS = {
  TRANSPARENT: "transparent",
  BRAND: {
    TRINET_ORANGE: "#E14700",
    TRINET_NAVY: "#0B0134"
  },
  PRIMARY: {
    ORANGE_10: "#FFF1EB",
    ORANGE_20: "#FFD4C7",
    ORANGE_30: "#FFB199",
    ORANGE_40: "#FF8064",
    ORANGE_45: "#FA6C4D",
    ORANGE_50: "#E14700",
    ORANGE_60: "#D14200",
    ORANGE_70: "#a83706",
    ORANGE_75: "#75443F",
    ORANGE_80: "#2F120E"
  },
  SECONDARY: {
    BLUE_10: "#F8FAFF",
    BLUE_20: "#F0F5FF",
    BLUE_30: "#D0E4FF",
    BLUE_40: "#94BEFD",
    BLUE_50: "#5C9DFF",
    BLUE_60: "#0A62E6",
    BLUE_70: "#044DBB",
    BLUE_80: "#0B0134"
  },
  SYSTEM: {
    WHITE: "#FFFFFF",
    OFF_WHITE: "#F8F9FA",
    MISTY: "#EEF0F2",
    CLOUDY: "#DDE1E6",
    SILVER: "#B3BDC7",
    PEWTER: "#6E7789",
    DARK_30: "#646C7D",
    SLATE: "#444C5C",
    INK: "#242936",
    DARK_60: "#20242F",
    DARK_70: "#191D26",
    DARK_80: "#07080B",
    BLACK: "#000000"
  },
  INFO: {
    INFO_10: "#F3F6FF",
    INFO_20: "#AECFFF",
    INFO_30: "#56ABFF",
    INFO_40: "#0070E0",
    INFO_50: "#012596"
  },
  SUCCESS: {
    SUCCESS_10: "#F2FBF5",
    SUCCESS_20: "#B7E9C9",
    SUCCESS_30: "#33E173",
    SUCCESS_40: "#008531",
    SUCCESS_50: "#044E1F"
  },
  WARNING: {
    WARNING_10: "#FFF7ED",
    WARNING_20: "#FDD7B5",
    WARNING_30: "#FFB258",
    WARNING_40: "#FF8C22",
    WARNING_50: "#682F03"
  },
  ERROR: {
    ERROR_10: "#FFF2F2",
    ERROR_20: "#FFB4B4",
    ERROR_30: "#FF6359",
    ERROR_40: "#E01021",
    ERROR_50: "#AF0A0A"
  },
  ACCENT: {
    VIOLET_10: "#F2ECFB",
    VIOLET_20: "#C3AFEF",
    VIOLET_30: "#875FDE",
    VIOLET_40: "#661CC8",
    VIOLET_50: "#3F0066",
    TEAL_10: "#DBE4F6",
    TEAL_20: "#9BAFD4",
    TEAL_30: "#587AB8",
    TEAL_40: "#355287",
    TEAL_50: "#213762",
    GREEN_10: "#F2FBF5",
    GREEN_20: "#A5EDD3",
    GREEN_30: "#45D8B4",
    GREEN_40: "#02936F",
    GREEN_50: "#00434A",
    MAGENTA_10: "#FFE8F5",
    MAGENTA_20: "#FF8DCB",
    MAGENTA_30: "#D95188",
    MAGENTA_40: "#DB0661",
    MAGENTA_50: "#6B003D",
    YELLOW_10: "#FEF9E7",
    YELLOW_20: "#FFEEB2",
    YELLOW_30: "#FFD649",
    YELLOW_40: "#F4C006",
    YELLOW_50: "#CB7A00"
  }
};
var omitCustomProps = (obj = {}, keys) => {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (!keys.includes(key)) {
      result[key] = value;
    }
  }
  return result;
};

// lib/buttons/theme.ts
var buttonTheme = {
  dark: {
    name: "button",
    styles: {
      loadingBackground: COLORS.SYSTEM.SILVER,
      loadingForeground: COLORS.SYSTEM.CLOUDY,
      primary: {
        text: COLORS.PRIMARY.ORANGE_80,
        default: {
          body: COLORS.PRIMARY.ORANGE_40
        },
        hover: {
          body: COLORS.PRIMARY.ORANGE_45
        },
        active: {
          body: COLORS.PRIMARY.ORANGE_30
        },
        disabled: {
          body: COLORS.PRIMARY.ORANGE_75
        }
      },
      secondary: {
        body: COLORS.TRANSPARENT,
        default: {
          border: COLORS.PRIMARY.ORANGE_40,
          text: COLORS.PRIMARY.ORANGE_40
        },
        hover: {
          border: COLORS.PRIMARY.ORANGE_45,
          text: COLORS.PRIMARY.ORANGE_45
        },
        active: {
          border: COLORS.PRIMARY.ORANGE_30,
          text: COLORS.PRIMARY.ORANGE_30
        },
        disabled: {
          border: COLORS.PRIMARY.ORANGE_75,
          text: COLORS.PRIMARY.ORANGE_75
        }
      },
      tertiary: {
        text: COLORS.SYSTEM.WHITE,
        default: {
          body: COLORS.SYSTEM.INK,
          border: COLORS.SYSTEM.SLATE
        },
        hover: {
          body: COLORS.SYSTEM.SLATE
        },
        active: {
          body: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          body: COLORS.SYSTEM.DARK_60,
          text: COLORS.SYSTEM.PEWTER
        }
      },
      contrast: {
        text: COLORS.SYSTEM.INK,
        default: {
          body: COLORS.SYSTEM.WHITE
        },
        hover: {
          body: COLORS.SYSTEM.CLOUDY
        },
        active: {
          body: COLORS.SYSTEM.MISTY
        },
        disabled: {
          body: COLORS.SYSTEM.DARK_30,
          text: COLORS.SYSTEM.INK
        }
      },
      contrastOutline: {
        body: COLORS.SYSTEM.DARK_70,
        default: {
          border: COLORS.SYSTEM.WHITE,
          text: COLORS.SYSTEM.WHITE
        },
        hover: {
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.CLOUDY
        },
        active: {
          border: COLORS.SYSTEM.MISTY,
          text: COLORS.SYSTEM.MISTY
        },
        disabled: {
          border: COLORS.SYSTEM.DARK_30,
          text: COLORS.SYSTEM.DARK_30
        }
      },
      contrastReverse: {
        text: COLORS.SYSTEM.WHITE,
        default: {
          body: COLORS.SYSTEM.DARK_70
        },
        hover: {
          body: COLORS.SYSTEM.DARK_80
        },
        active: {
          body: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          body: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.PEWTER
        }
      },
      contrastOutlineReverse: {
        body: COLORS.SYSTEM.WHITE,
        default: {
          border: COLORS.SYSTEM.DARK_70,
          text: COLORS.SYSTEM.DARK_70
        },
        hover: {
          border: COLORS.SYSTEM.DARK_80,
          text: COLORS.SYSTEM.DARK_80
        },
        active: {
          border: COLORS.SYSTEM.DARK_60,
          text: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.CLOUDY
        }
      },
      transparent: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_40
        },
        hover: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SECONDARY.BLUE_50,
          border: COLORS.SYSTEM.SLATE
        },
        active: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SECONDARY.BLUE_30
        },
        disabled: {
          text: COLORS.SYSTEM.PEWTER
        }
      },
      transparentReverse: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_60
        },
        hover: {
          body: COLORS.SECONDARY.BLUE_10,
          text: COLORS.SECONDARY.BLUE_50
        },
        active: {
          text: COLORS.SECONDARY.BLUE_70
        },
        disabled: {
          text: COLORS.SYSTEM.SILVER
        }
      },
      link: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_40
        },
        hover: {
          text: COLORS.SECONDARY.BLUE_50
        },
        active: {
          text: COLORS.SECONDARY.BLUE_30
        },
        disabled: {
          text: COLORS.SYSTEM.PEWTER
        }
      },
      elevated: {
        body: COLORS.SYSTEM.INK,
        default: {
          text: COLORS.SYSTEM.WHITE
        },
        hover: {
          body: COLORS.SYSTEM.SLATE,
          text: COLORS.SYSTEM.WHITE
        },
        active: {
          text: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          text: COLORS.SYSTEM.PEWTER
        }
      },
      header: {
        default: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SYSTEM.CLOUDY
        },
        hover: { body: COLORS.SYSTEM.DARK_70 },
        active: { body: COLORS.SYSTEM.DARK_70 },
        disabled: { body: COLORS.SYSTEM.DARK_60, text: COLORS.SYSTEM.PEWTER }
      },
      fab: {
        default: {
          default: {
            body: COLORS.SYSTEM.INK,
            text: COLORS.SYSTEM.WHITE
          },
          hover: { body: COLORS.SYSTEM.SLATE },
          active: { body: COLORS.SYSTEM.DARK_60, border: COLORS.SYSTEM.WHITE },
          disabled: { body: COLORS.SYSTEM.DARK_60, text: COLORS.SYSTEM.PEWTER }
        },
        primary: {
          text: COLORS.PRIMARY.ORANGE_80,
          default: {
            body: COLORS.PRIMARY.ORANGE_40
          },
          hover: {
            body: COLORS.PRIMARY.ORANGE_45
          },
          active: {
            body: COLORS.PRIMARY.ORANGE_30,
            border: COLORS.SYSTEM.WHITE
          },
          disabled: {
            body: COLORS.PRIMARY.ORANGE_75
          }
        },
        secondary: {
          default: {
            body: COLORS.SECONDARY.BLUE_40,
            text: COLORS.SECONDARY.BLUE_80
          },
          hover: { body: COLORS.SECONDARY.BLUE_50 },
          active: {
            body: COLORS.SECONDARY.BLUE_30,
            border: COLORS.SYSTEM.WHITE
          },
          disabled: { body: COLORS.SYSTEM.INK, text: COLORS.SYSTEM.PEWTER }
        }
      },
      chip: {
        text: COLORS.SECONDARY.BLUE_40,
        default: {
          body: COLORS.SYSTEM.SLATE
        },
        hover: {
          body: COLORS.SYSTEM.SLATE
        },
        active: {
          body: COLORS.SYSTEM.DARK_70
        },
        disabled: {
          body: COLORS.PRIMARY.ORANGE_20
        }
      },
      toggleIcon: {
        text: COLORS.SYSTEM.PEWTER,
        default: {
          body: COLORS.SYSTEM.INK,
          border: COLORS.SYSTEM.SLATE
        },
        hover: {
          body: COLORS.SYSTEM.WHITE,
          border: COLORS.SYSTEM.PEWTER
        },
        active: {
          body: COLORS.SYSTEM.DARK_70,
          border: COLORS.SYSTEM.SLATE
        },
        disabled: {
          body: COLORS.SYSTEM.DARK_60,
          border: COLORS.SYSTEM.INK,
          text: COLORS.SYSTEM.SLATE
        },
        selected: {
          body: COLORS.SYSTEM.DARK_70,
          border: COLORS.SYSTEM.SLATE,
          text: COLORS.SYSTEM.WHITE
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_40
        },
        icon: {
          body: COLORS.SYSTEM.SILVER
        }
      },
      simpleIcon: {
        text: COLORS.SYSTEM.WHITE,
        default: {
          body: COLORS.SYSTEM.INK,
          border: COLORS.SYSTEM.SLATE
        },
        hover: {
          text: COLORS.SECONDARY.BLUE_40
        },
        active: {
          body: COLORS.SYSTEM.DARK_70,
          border: COLORS.SYSTEM.SLATE
        },
        disabled: {
          text: COLORS.SYSTEM.PEWTER
        },
        selected: {
          body: COLORS.SYSTEM.DARK_70,
          border: COLORS.SYSTEM.SLATE,
          text: COLORS.SYSTEM.WHITE
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_40
        },
        icon: {
          body: COLORS.SYSTEM.SILVER
        }
      }
    }
  },
  light: {
    name: "button",
    styles: {
      loadingBackground: COLORS.SYSTEM.PEWTER,
      loadingForeground: COLORS.SYSTEM.PEWTER,
      primary: {
        text: COLORS.SYSTEM.WHITE,
        default: {
          body: COLORS.PRIMARY.ORANGE_60
        },
        hover: {
          body: COLORS.PRIMARY.ORANGE_50
        },
        active: {
          body: COLORS.PRIMARY.ORANGE_70
        },
        disabled: {
          body: COLORS.PRIMARY.ORANGE_20
        }
      },
      secondary: {
        body: COLORS.SYSTEM.WHITE,
        default: {
          border: COLORS.PRIMARY.ORANGE_60,
          text: COLORS.PRIMARY.ORANGE_60
        },
        hover: {
          border: COLORS.PRIMARY.ORANGE_50,
          text: COLORS.PRIMARY.ORANGE_50
        },
        active: {
          border: COLORS.PRIMARY.ORANGE_70,
          text: COLORS.PRIMARY.ORANGE_70
        },
        disabled: {
          border: COLORS.PRIMARY.ORANGE_20,
          text: COLORS.PRIMARY.ORANGE_20
        }
      },
      tertiary: {
        text: COLORS.SYSTEM.INK,
        default: {
          body: COLORS.SYSTEM.MISTY,
          border: COLORS.TRANSPARENT
        },
        hover: {
          body: COLORS.SYSTEM.CLOUDY
        },
        active: {
          body: COLORS.SYSTEM.OFF_WHITE
        },
        disabled: {
          body: COLORS.SYSTEM.MISTY,
          text: COLORS.SYSTEM.SILVER
        }
      },
      contrast: {
        text: COLORS.SYSTEM.WHITE,
        default: {
          body: COLORS.SYSTEM.DARK_70
        },
        hover: {
          body: COLORS.SYSTEM.DARK_80
        },
        active: {
          body: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          body: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.PEWTER
        }
      },
      contrastOutline: {
        body: COLORS.SYSTEM.WHITE,
        default: {
          border: COLORS.SYSTEM.DARK_70,
          text: COLORS.SYSTEM.DARK_70
        },
        hover: {
          border: COLORS.SYSTEM.DARK_80,
          text: COLORS.SYSTEM.DARK_80
        },
        active: {
          border: COLORS.SYSTEM.DARK_60,
          text: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.CLOUDY
        }
      },
      contrastReverse: {
        text: COLORS.SYSTEM.INK,
        default: {
          body: COLORS.SYSTEM.WHITE
        },
        hover: {
          body: COLORS.SYSTEM.CLOUDY
        },
        active: {
          body: COLORS.SYSTEM.MISTY
        },
        disabled: {
          body: COLORS.SYSTEM.DARK_30,
          text: COLORS.SYSTEM.INK
        }
      },
      contrastOutlineReverse: {
        body: COLORS.SYSTEM.DARK_70,
        default: {
          border: COLORS.SYSTEM.WHITE,
          text: COLORS.SYSTEM.WHITE
        },
        hover: {
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.CLOUDY
        },
        active: {
          border: COLORS.SYSTEM.MISTY,
          text: COLORS.SYSTEM.MISTY
        },
        disabled: {
          border: COLORS.SYSTEM.DARK_30,
          text: COLORS.SYSTEM.DARK_30
        }
      },
      transparent: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_60
        },
        hover: {
          body: COLORS.SECONDARY.BLUE_10,
          text: COLORS.SECONDARY.BLUE_50,
          border: COLORS.TRANSPARENT
        },
        active: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SECONDARY.BLUE_70
        },
        disabled: {
          text: COLORS.SYSTEM.SILVER
        }
      },
      transparentReverse: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_40
        },
        hover: {
          body: COLORS.SYSTEM.INK,
          text: COLORS.SECONDARY.BLUE_50
        },
        active: {
          text: COLORS.SECONDARY.BLUE_30
        },
        disabled: {
          text: COLORS.SYSTEM.PEWTER
        }
      },
      link: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_60
        },
        hover: {
          text: COLORS.SECONDARY.BLUE_50
        },
        active: {
          text: COLORS.SECONDARY.BLUE_70
        },
        disabled: {
          text: COLORS.SYSTEM.SILVER
        }
      },
      elevated: {
        body: COLORS.SYSTEM.WHITE,
        default: {
          text: COLORS.SYSTEM.INK
        },
        hover: {
          body: COLORS.SYSTEM.OFF_WHITE
        },
        active: {
          text: COLORS.SECONDARY.BLUE_70,
          body: COLORS.SYSTEM.MISTY
        },
        disabled: {
          text: COLORS.SYSTEM.SILVER
        }
      },
      header: {
        default: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SYSTEM.PEWTER
        },
        hover: { body: COLORS.SYSTEM.OFF_WHITE },
        active: { body: COLORS.SYSTEM.OFF_WHITE },
        disabled: { body: COLORS.TRANSPARENT, text: COLORS.SYSTEM.SILVER }
      },
      fab: {
        default: {
          default: {
            body: COLORS.SYSTEM.MISTY,
            text: COLORS.SYSTEM.INK
          },
          hover: { body: COLORS.SYSTEM.CLOUDY },
          active: {
            body: COLORS.SYSTEM.OFF_WHITE,
            border: COLORS.SYSTEM.DARK_80
          },
          disabled: { body: COLORS.SYSTEM.CLOUDY, text: COLORS.SYSTEM.SILVER }
        },
        primary: {
          text: COLORS.SYSTEM.WHITE,
          default: {
            body: COLORS.PRIMARY.ORANGE_60
          },
          hover: {
            body: COLORS.PRIMARY.ORANGE_50
          },
          active: {
            body: COLORS.PRIMARY.ORANGE_70,
            border: COLORS.SYSTEM.DARK_80
          },
          disabled: {
            body: COLORS.PRIMARY.ORANGE_20
          }
        },
        secondary: {
          default: {
            body: COLORS.SECONDARY.BLUE_60,
            text: COLORS.SYSTEM.WHITE
          },
          hover: { body: COLORS.SECONDARY.BLUE_50 },
          active: {
            body: COLORS.SECONDARY.BLUE_70,
            border: COLORS.SYSTEM.DARK_80
          },
          disabled: {
            body: COLORS.SECONDARY.BLUE_20,
            text: COLORS.SYSTEM.SILVER
          }
        }
      },
      chip: {
        text: COLORS.SECONDARY.BLUE_60,
        default: {
          body: COLORS.SECONDARY.BLUE_10
        },
        hover: {
          body: COLORS.SECONDARY.BLUE_20
        },
        active: {
          body: COLORS.SECONDARY.BLUE_30
        },
        disabled: {
          body: COLORS.SECONDARY.BLUE_60,
          text: COLORS.SECONDARY.BLUE_60
        }
      },
      toggleIcon: {
        text: COLORS.SYSTEM.PEWTER,
        default: {
          body: COLORS.SYSTEM.WHITE,
          border: COLORS.SYSTEM.CLOUDY
        },
        hover: {
          body: COLORS.SYSTEM.WHITE,
          border: COLORS.SYSTEM.SILVER
        },
        active: {
          body: COLORS.SYSTEM.OFF_WHITE,
          border: COLORS.SYSTEM.CLOUDY
        },
        disabled: {
          body: COLORS.SYSTEM.MISTY,
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.SILVER
        },
        selected: {
          body: COLORS.SYSTEM.MISTY,
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.INK
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_60
        },
        icon: {
          body: COLORS.SYSTEM.PEWTER
        }
      },
      simpleIcon: {
        text: COLORS.SYSTEM.INK,
        default: {
          body: COLORS.SYSTEM.WHITE,
          border: COLORS.SYSTEM.CLOUDY
        },
        hover: {
          text: COLORS.SECONDARY.BLUE_60
        },
        active: {
          body: COLORS.SYSTEM.OFF_WHITE,
          border: COLORS.SYSTEM.CLOUDY
        },
        disabled: {
          text: COLORS.SYSTEM.SILVER
        },
        selected: {
          body: COLORS.SYSTEM.MISTY,
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.INK
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_60
        },
        icon: {
          body: COLORS.SYSTEM.PEWTER
        }
      }
    }
  }
};
var _buttonTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        loadingBackground: theme.palette.t1.system.silver,
        loadingForeground: theme.palette.t1.system.cloudy,
        primary: {
          text: theme.palette.t1.primary.orange80,
          default: {
            body: theme.palette.t1.primary.orange40
          },
          hover: {
            body: theme.palette.t1.primary.orange45
          },
          active: {
            body: theme.palette.t1.primary.orange30
          },
          disabled: {
            body: theme.palette.t1.primary.orange75
          }
        },
        secondary: {
          body: theme.palette.t1.transparent,
          default: {
            border: theme.palette.t1.primary.orange40,
            text: theme.palette.t1.primary.orange40
          },
          hover: {
            border: theme.palette.t1.primary.orange45,
            text: theme.palette.t1.primary.orange45
          },
          active: {
            border: theme.palette.t1.primary.orange30,
            text: theme.palette.t1.primary.orange30
          },
          disabled: {
            border: theme.palette.t1.primary.orange75,
            text: theme.palette.t1.primary.orange75
          }
        },
        tertiary: {
          text: theme.palette.t1.system.white,
          default: {
            body: theme.palette.t1.system.ink,
            border: theme.palette.t1.system.slate
          },
          hover: {
            body: theme.palette.t1.system.slate
          },
          active: {
            body: theme.palette.t1.system.dark60
          },
          disabled: {
            body: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.pewter
          }
        },
        contrast: {
          text: theme.palette.t1.system.ink,
          default: {
            body: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.cloudy
          },
          active: {
            body: theme.palette.t1.system.misty
          },
          disabled: {
            body: theme.palette.t1.system.dark30,
            text: theme.palette.t1.system.ink
          }
        },
        contrastOutline: {
          body: theme.palette.t1.system.dark70,
          default: {
            border: theme.palette.t1.system.white,
            text: theme.palette.t1.system.white
          },
          hover: {
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.cloudy
          },
          active: {
            border: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.misty
          },
          disabled: {
            border: theme.palette.t1.system.dark30,
            text: theme.palette.t1.system.dark30
          }
        },
        contrastReverse: {
          text: theme.palette.t1.system.white,
          default: {
            body: theme.palette.t1.system.dark70
          },
          hover: {
            body: theme.palette.t1.system.dark80
          },
          active: {
            body: theme.palette.t1.system.dark60
          },
          disabled: {
            body: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.pewter
          }
        },
        contrastOutlineReverse: {
          body: theme.palette.t1.system.white,
          default: {
            border: theme.palette.t1.system.dark70,
            text: theme.palette.t1.system.dark70
          },
          hover: {
            border: theme.palette.t1.system.dark80,
            text: theme.palette.t1.system.dark80
          },
          active: {
            border: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.dark60
          },
          disabled: {
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.cloudy
          }
        },
        transparent: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue40
          },
          hover: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue50,
            border: theme.palette.t1.system.slate
          },
          active: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue30
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          }
        },
        transparentReverse: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue60
          },
          hover: {
            body: theme.palette.t1.secondary.blue10,
            text: theme.palette.t1.secondary.blue50
          },
          active: {
            text: theme.palette.t1.secondary.blue70
          },
          disabled: {
            text: theme.palette.t1.system.silver
          }
        },
        link: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue40
          },
          hover: {
            text: theme.palette.t1.secondary.blue50
          },
          active: {
            text: theme.palette.t1.secondary.blue30
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          }
        },
        elevated: {
          body: theme.palette.t1.system.ink,
          default: {
            text: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.slate,
            text: theme.palette.t1.system.white
          },
          active: {
            text: theme.palette.t1.system.dark60
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          }
        },
        header: {
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.cloudy
          },
          hover: { body: theme.palette.t1.system.dark70 },
          active: { body: theme.palette.t1.system.dark70 },
          disabled: {
            body: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.pewter
          }
        },
        fab: {
          default: {
            default: {
              body: theme.palette.t1.system.ink,
              text: theme.palette.t1.system.white
            },
            hover: { body: theme.palette.t1.system.slate },
            active: {
              body: theme.palette.t1.system.dark60,
              border: theme.palette.t1.system.white
            },
            disabled: {
              body: theme.palette.t1.system.dark60,
              text: theme.palette.t1.system.pewter
            }
          },
          primary: {
            text: theme.palette.t1.primary.orange80,
            default: {
              body: theme.palette.t1.primary.orange40
            },
            hover: {
              body: theme.palette.t1.primary.orange45
            },
            active: {
              body: theme.palette.t1.primary.orange30,
              border: theme.palette.t1.system.white
            },
            disabled: {
              body: theme.palette.t1.primary.orange75
            }
          },
          secondary: {
            default: {
              body: theme.palette.t1.secondary.blue40,
              text: theme.palette.t1.secondary.blue80
            },
            hover: { body: theme.palette.t1.secondary.blue50 },
            active: {
              body: theme.palette.t1.secondary.blue30,
              border: theme.palette.t1.system.white
            },
            disabled: {
              body: theme.palette.t1.system.ink,
              text: theme.palette.t1.system.pewter
            }
          }
        },
        chip: {
          text: theme.palette.t1.secondary.blue40,
          default: {
            body: theme.palette.t1.system.slate
          },
          hover: {
            body: theme.palette.t1.system.slate
          },
          active: {
            body: theme.palette.t1.system.dark70
          },
          disabled: {
            body: theme.palette.t1.primary.orange20
          }
        },
        toggleIcon: {
          text: theme.palette.t1.system.pewter,
          default: {
            body: theme.palette.t1.system.ink,
            border: theme.palette.t1.system.slate
          },
          hover: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.pewter
          },
          active: {
            body: theme.palette.t1.system.dark70,
            border: theme.palette.t1.system.slate
          },
          disabled: {
            body: theme.palette.t1.system.dark60,
            border: theme.palette.t1.system.ink,
            text: theme.palette.t1.system.slate
          },
          selected: {
            body: theme.palette.t1.system.dark70,
            text: theme.palette.t1.system.white,
            border: theme.palette.t1.system.slate
          },
          focused: {
            border: theme.palette.t1.secondary.blue40
          },
          icon: {
            body: theme.palette.t1.system.silver
          }
        },
        simpleIcon: {
          text: theme.palette.t1.system.white,
          default: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.cloudy
          },
          hover: {
            text: theme.palette.t1.secondary.blue40
          },
          active: {
            body: theme.palette.t1.system.offWhite,
            border: theme.palette.t1.system.cloudy
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          },
          selected: {
            body: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.ink,
            border: theme.palette.t1.system.cloudy
          },
          focused: {
            border: theme.palette.t1.secondary.blue40
          },
          icon: {
            body: theme.palette.t1.system.pewter
          }
        }
      };
    }
    case "light":
    default: {
      return {
        loadingBackground: theme.palette.t1.system.pewter,
        loadingForeground: theme.palette.t1.system.pewter,
        primary: {
          text: theme.palette.t1.system.white,
          default: {
            body: theme.palette.t1.primary.orange60
          },
          hover: {
            body: theme.palette.t1.primary.orange50
          },
          active: {
            body: theme.palette.t1.primary.orange70
          },
          disabled: {
            body: theme.palette.t1.primary.orange20
          }
        },
        secondary: {
          body: theme.palette.t1.system.white,
          default: {
            border: theme.palette.t1.primary.orange60,
            text: theme.palette.t1.primary.orange60
          },
          hover: {
            border: theme.palette.t1.primary.orange50,
            text: theme.palette.t1.primary.orange50
          },
          active: {
            border: theme.palette.t1.primary.orange70,
            text: theme.palette.t1.primary.orange70
          },
          disabled: {
            border: theme.palette.t1.primary.orange20,
            text: theme.palette.t1.primary.orange20
          }
        },
        tertiary: {
          text: theme.palette.t1.system.ink,
          default: {
            body: theme.palette.t1.system.misty,
            border: theme.palette.t1.transparent
          },
          hover: {
            body: theme.palette.t1.system.cloudy
          },
          active: {
            body: theme.palette.t1.system.offWhite
          },
          disabled: {
            body: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.silver
          }
        },
        contrast: {
          text: theme.palette.t1.system.white,
          default: {
            body: theme.palette.t1.system.dark70
          },
          hover: {
            body: theme.palette.t1.system.dark80
          },
          active: {
            body: theme.palette.t1.system.dark60
          },
          disabled: {
            body: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.pewter
          }
        },
        contrastOutline: {
          body: theme.palette.t1.system.white,
          default: {
            border: theme.palette.t1.system.dark70,
            text: theme.palette.t1.system.dark70
          },
          hover: {
            border: theme.palette.t1.system.dark80,
            text: theme.palette.t1.system.dark80
          },
          active: {
            border: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.dark60
          },
          disabled: {
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.cloudy
          }
        },
        contrastReverse: {
          text: theme.palette.t1.system.ink,
          default: {
            body: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.cloudy
          },
          active: {
            body: theme.palette.t1.system.misty
          },
          disabled: {
            body: theme.palette.t1.system.dark30,
            text: theme.palette.t1.system.ink
          }
        },
        contrastOutlineReverse: {
          body: theme.palette.t1.system.dark70,
          default: {
            border: theme.palette.t1.system.white,
            text: theme.palette.t1.system.white
          },
          hover: {
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.cloudy
          },
          active: {
            border: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.misty
          },
          disabled: {
            border: theme.palette.t1.system.dark30,
            text: theme.palette.t1.system.dark30
          }
        },
        transparent: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue60
          },
          hover: {
            body: theme.palette.t1.secondary.blue10,
            text: theme.palette.t1.secondary.blue50,
            border: theme.palette.t1.transparent
          },
          active: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue70
          },
          disabled: {
            text: theme.palette.t1.system.silver
          }
        },
        transparentReverse: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue40
          },
          hover: {
            body: theme.palette.t1.system.ink,
            text: theme.palette.t1.secondary.blue50
          },
          active: {
            text: theme.palette.t1.secondary.blue30
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          }
        },
        link: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue60
          },
          hover: {
            text: theme.palette.t1.secondary.blue50
          },
          active: {
            text: theme.palette.t1.secondary.blue70
          },
          disabled: {
            text: theme.palette.t1.system.silver
          }
        },
        elevated: {
          body: theme.palette.t1.system.white,
          default: {
            text: theme.palette.t1.system.ink
          },
          hover: {
            body: theme.palette.t1.system.offWhite
          },
          active: {
            text: theme.palette.t1.secondary.blue70,
            body: theme.palette.t1.system.misty
          },
          disabled: {
            text: theme.palette.t1.system.silver
          }
        },
        header: {
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.pewter
          },
          hover: { body: theme.palette.t1.system.offWhite },
          active: { body: theme.palette.t1.system.offWhite },
          disabled: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.silver
          }
        },
        fab: {
          default: {
            default: {
              body: theme.palette.t1.system.misty,
              text: theme.palette.t1.system.ink
            },
            hover: { body: theme.palette.t1.system.cloudy },
            active: {
              body: theme.palette.t1.system.offWhite,
              border: theme.palette.t1.system.dark80
            },
            disabled: {
              body: theme.palette.t1.system.cloudy,
              text: theme.palette.t1.system.silver
            }
          },
          primary: {
            text: theme.palette.t1.system.white,
            default: {
              body: theme.palette.t1.primary.orange60
            },
            hover: {
              body: theme.palette.t1.primary.orange50
            },
            active: {
              body: theme.palette.t1.primary.orange70,
              border: theme.palette.t1.system.dark80
            },
            disabled: {
              body: theme.palette.t1.primary.orange20
            }
          },
          secondary: {
            default: {
              body: theme.palette.t1.secondary.blue60,
              text: theme.palette.t1.system.white
            },
            hover: { body: theme.palette.t1.secondary.blue50 },
            active: {
              body: theme.palette.t1.secondary.blue70,
              border: theme.palette.t1.system.dark80
            },
            disabled: {
              body: theme.palette.t1.secondary.blue20,
              text: theme.palette.t1.system.silver
            }
          }
        },
        chip: {
          text: theme.palette.t1.secondary.blue60,
          default: {
            body: theme.palette.t1.secondary.blue10
          },
          hover: {
            body: theme.palette.t1.secondary.blue20
          },
          active: {
            body: theme.palette.t1.secondary.blue30
          },
          disabled: {
            body: theme.palette.t1.secondary.blue60,
            text: theme.palette.t1.secondary.blue60
          }
        },
        toggleIcon: {
          text: theme.palette.t1.system.pewter,
          default: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.cloudy
          },
          hover: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.silver
          },
          active: {
            body: theme.palette.t1.system.offWhite,
            border: theme.palette.t1.system.cloudy
          },
          disabled: {
            body: theme.palette.t1.system.misty,
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.silver
          },
          selected: {
            body: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.ink,
            border: theme.palette.t1.system.cloudy
          },
          focused: {
            border: theme.palette.t1.secondary.blue60
          },
          icon: {
            body: theme.palette.t1.system.pewter
          }
        },
        simpleIcon: {
          text: theme.palette.t1.system.ink,
          default: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.cloudy
          },
          hover: {
            text: theme.palette.t1.secondary.blue60
          },
          active: {
            body: theme.palette.t1.system.offWhite,
            border: theme.palette.t1.system.cloudy
          },
          disabled: {
            text: theme.palette.t1.system.silver
          },
          selected: {
            body: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.ink,
            border: theme.palette.t1.system.cloudy
          },
          focused: {
            border: theme.palette.t1.secondary.blue60
          },
          icon: {
            body: theme.palette.t1.system.pewter
          }
        }
      };
    }
  }
};
var StyledChipButton = styled(_MuiButton)(({
  theme
}) => {
  const palette = _buttonTheme(theme);
  return {
    ".MuiSvgIcon-root": {
      color: "inherit"
    },
    whiteSpace: "nowrap",
    textTransform: "none",
    fontFamily: theme.typography.paragraph.md.medium.fontFamily,
    fontSize: theme.typography.paragraph.md.medium.fontSize,
    boxShadow: "none",
    backgroundColor: palette.chip.default.body,
    height: "20px",
    padding: theme.spacing(4),
    borderRadius: "24px",
    color: palette.chip.text,
    margin: 0,
    "&:hover": {
      backgroundColor: palette.chip.hover.body
    },
    "&:active, &.T1-chipButton-active": {
      backgroundColor: palette.chip.active.body
    },
    "&.Mui-focusVisible": {
      backgroundColor: palette.chip.default.body,
      outline: `1px dashed ${palette.chip.text}`,
      "&:hover": {
        backgroundColor: palette.chip.hover.body
      },
      "&:active, &.T1-chipButton-active": {
        backgroundColor: palette.chip.active.body
      }
    },
    "&.Mui-disabled": {
      color: palette.chip.text,
      backgroundColor: palette.chip.default.body,
      opacity: "50%",
      cursor: "not-allowed",
      pointerEvents: "all"
    }
  };
});
var StyledToggleIconButton = styled(_MuiButton)(({ theme, buttontype = "center", selected = false }) => {
  const getBorderRadius = () => {
    switch (buttontype) {
      case "left":
        return `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`;
      case "right":
        return `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`;
      case "top":
        return `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`;
      case "bottom":
        return `0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`;
      case "center":
      default:
        return "0";
    }
  };
  return {
    minWidth: "auto",
    width: "54px",
    height: "36px",
    padding: 0,
    borderRadius: getBorderRadius(),
    position: "relative",
    boxSizing: "content-box",
    backgroundColor: selected ? theme.palette.button.toggleIcon.selected.body : theme.palette.button.toggleIcon.default.body,
    color: selected ? theme.palette.button.toggleIcon.selected.text : theme.palette.button.toggleIcon.text,
    border: selected ? `1px solid ${theme.palette.button.toggleIcon.selected.border}` : `1px solid ${theme.palette.button.toggleIcon.default.border}`,
    "&:hover, &.Mui-HoverVisible": {
      backgroundColor: theme.palette.button.toggleIcon.default.body,
      border: `1px solid ${theme.palette.button.toggleIcon.hover.border}`
    },
    "&:active, &.isActive": {
      backgroundColor: theme.palette.button.toggleIcon.active.body
    },
    "&.Mui-focusVisible": {
      backgroundColor: theme.palette.button.toggleIcon.default.body,
      border: `1px dashed ${theme.palette.button.toggleIcon.focused.border}`,
      outline: "none",
      "&:hover": {
        backgroundColor: theme.palette.button.toggleIcon.default.body
      }
    },
    "&.Mui-disabled": {
      backgroundColor: theme.palette.button.toggleIcon.disabled.body,
      color: theme.palette.action.disabled,
      border: `1px solid ${theme.palette.button.toggleIcon.disabled.border}`,
      ".MuiSvgIcon-root": {
        color: theme.palette.button.toggleIcon.disabled.text
      }
    },
    "& .MuiSvgIcon-root": {
      fontSize: "20px",
      color: selected ? theme.palette.button.toggleIcon.selected.text : theme.palette.button.toggleIcon.icon.body
    }
  };
});
var StyledSimpleIconButton = styled(IconButton)(({ theme, variant, selected }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  transition: "color 0.2s ease-in-out",
  width: "24px",
  height: "24px",
  color: theme.palette.button.simpleIcon.text,
  "&:hover:not(:disabled), &.Mui-HoverVisible": {
    backgroundColor: "transparent",
    color: theme.palette.button.simpleIcon.hover.text
  },
  ...selected && {
    color: variant === "heart" ? "#C62828" : "#FBC02D",
    "&:hover:not(:disabled)": {
      color: variant === "heart" ? "#C62828" : "#FBC02D"
    }
  },
  "&.Mui-focusVisible": {
    backgroundColor: "transparent",
    color: theme.palette.button.simpleIcon.hover.text,
    border: `1px dashed ${theme.palette.button.toggleIcon.focused.border}`,
    outlineOffset: "2px"
  },
  "&:disabled": {
    color: theme.palette.button.simpleIcon.disabled.text,
    cursor: "not-allowed"
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1rem",
    transition: "inherit"
  }
}));
var StyledButtonArrangement = styled(Stack)(({
  theme
}) => {
  return {
    display: "flex",
    gap: theme.spacing(3),
    justifyContent: "end",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      ".MuiButtonBase-root": { width: "100%" }
    }
  };
});

// lib/buttons/constants.ts
var STROKE_WIDTH = {
  large: "3px",
  medium: "4px",
  small: "5px",
  extraSmall: "5.5px"
};

// lib/circular-progress/theme.ts
import { styled as styled2 } from "@mui/material";

// lib/circular-progress/constants.ts
var SIZE_MAP = {
  extraLarge: "90px",
  large: "60px",
  medium: "48px",
  small: "30px",
  extraSmall: "18px"
};
var STROKE_WIDTH2 = {
  extraLarge: "0.9px",
  large: "1.2px",
  medium: "1.5px",
  small: "2.4px",
  extraSmall: "4px"
};

// lib/circular-progress/theme.ts
var circularProgressTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        default: {
          background: theme.palette.t1.system.slate,
          foreground: theme.palette.t1.system.white
        },
        brand: {
          background: theme.palette.t1.primary.orange75,
          foreground: theme.palette.t1.primary.orange30
        },
        stepper: {
          background: theme.palette.t1.system.silver,
          foreground: theme.palette.t1.secondary.blue40
        }
      };
    }
    case "light": {
      return {
        default: {
          background: theme.palette.t1.secondary.blue20,
          foreground: theme.palette.t1.secondary.blue80
        },
        brand: {
          background: theme.palette.t1.primary.orange10,
          foreground: theme.palette.t1.primary.orange50
        },
        stepper: {
          background: theme.palette.t1.secondary.blue30,
          foreground: theme.palette.t1.secondary.blue60
        }
      };
    }
  }
};
var StyledCircularProgressWrapper = styled2(
  "div"
)(({
  theme,
  size,
  color
}) => {
  const palette = circularProgressTheme(theme);
  return {
    position: "relative",
    width: `${SIZE_MAP[size]}`,
    height: `${SIZE_MAP[size]}`,
    stroke: `${palette[color].background}`,
    circle: {
      strokeWidth: `${STROKE_WIDTH2[size]}`,
      fill: "transparent"
    },
    ".MuiCircularProgress-root": {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      color: `${palette[color].foreground}`
    }
  };
});
var StyledStepperCircularProgressWrapper = styled2("div")(({
  theme,
  color
}) => {
  const palette = circularProgressTheme(theme);
  return {
    position: "relative",
    width: "24px",
    height: "24px",
    strokeWidth: "2.5",
    stroke: palette.default.background,
    svg: {
      position: "absolute",
      left: 0
    },
    circle: {
      fill: "transparent"
    },
    "&.T1-CircularProgressWrapper-Stepper": {
      stroke: palette.stepper.background
    },
    ".T1-CircularProgress-Stepper": {
      stroke: palette.stepper.foreground
    },
    ".MuiCircularProgress-root": {
      maxWidth: "100%",
      maxHeight: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      color: palette[color].foreground
    }
  };
});

// lib/circular-progress/component.tsx
import { CircularProgress as MuiCircularProgress } from "@mui/material";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var CircularProgress = ({
  color = "default",
  size = "medium",
  ...props
}) => {
  return /* @__PURE__ */ jsxs(
    StyledCircularProgressWrapper,
    {
      size,
      color,
      className: "T1-CircularProgress-wrapper",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx2(
          "svg",
          {
            className: "CircularProgress-background",
            viewBox: "22 22 44 44",
            xmlns: "http://www.w3.org/2000/svg",
            style: { maxWidth: "100%", maxHeight: "100%" },
            children: /* @__PURE__ */ jsx2("circle", { cx: "44", cy: "44", r: "20.2" })
          }
        ),
        /* @__PURE__ */ jsx2(MuiCircularProgress, { ...props, size: SIZE_MAP[size] })
      ]
    }
  );
};

// lib/buttons/component.tsx
import {
  ArrowDropDown,
  Favorite,
  FavoriteBorder,
  Star,
  StarBorder
} from "@mui/icons-material";

// lib/menu/component.tsx
import React2 from "react";
import { Menu as MuiMenu } from "@mui/material";

// lib/cms/component.tsx
import { useEffect, useMemo as useMemo2, useState, createElement } from "react";
import { useIntl, IntlProvider } from "react-intl";
import { jsx as jsx3 } from "react/jsx-runtime";
var createHTMLTagsMapper = () => {
  const htmlTags = [
    // Document structure
    "html",
    "head",
    "body",
    "title",
    "meta",
    "link",
    "style",
    "script",
    "noscript",
    "base",
    // Sections
    "header",
    "nav",
    "main",
    "section",
    "article",
    "aside",
    "footer",
    "address",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    // Grouping content
    "div",
    "p",
    "hr",
    "pre",
    "blockquote",
    "ol",
    "ul",
    "li",
    "dl",
    "dt",
    "dd",
    "figure",
    "figcaption",
    // Text-level semantics
    "a",
    "em",
    "strong",
    "small",
    "mark",
    "del",
    "ins",
    "q",
    "cite",
    "abbr",
    "dfn",
    "time",
    "code",
    "var",
    "samp",
    "kbd",
    "sub",
    "sup",
    "i",
    "b",
    "u",
    "s",
    "span",
    "br",
    "wbr",
    "bdi",
    "bdo",
    "ruby",
    "rt",
    "rp",
    // Embedded content
    "img",
    "iframe",
    "embed",
    "object",
    "param",
    "video",
    "audio",
    "source",
    "track",
    "map",
    "area",
    "svg",
    "math",
    // Tabular data
    "table",
    "caption",
    "colgroup",
    "col",
    "tbody",
    "thead",
    "tfoot",
    "tr",
    "td",
    "th",
    // Forms
    "form",
    "fieldset",
    "legend",
    "label",
    "input",
    "button",
    "select",
    "datalist",
    "optgroup",
    "option",
    "textarea",
    "output",
    "progress",
    "meter",
    // Interactive elements
    "details",
    "summary",
    "dialog",
    // Web Components
    "slot",
    "template",
    // Deprecated but still used
    "center",
    "font",
    "big",
    "small",
    "tt"
  ];
  const mapper = {};
  htmlTags.forEach((tag) => {
    mapper[tag] = (chunks) => createElement(tag, {}, chunks);
  });
  return mapper;
};
var htmlTagsMapper = createHTMLTagsMapper();
var useGetCMSContent = () => {
  const intl = useIntl();
  return ({
    contentId,
    key,
    fallbackContent = "Content not found",
    values,
    enableHTMLTags = false
  }) => {
    const id = key || null;
    const messageId = `${contentId}${id}`;
    const notFoundMarker = `__CMS_NOT_FOUND__${messageId}__`;
    const formatValues = enableHTMLTags ? { ...htmlTagsMapper, ...values } : values;
    const cmsMessage = intl.formatMessage(
      {
        id: messageId,
        defaultMessage: notFoundMarker
      },
      formatValues
    );
    return cmsMessage === notFoundMarker ? fallbackContent : cmsMessage;
  };
};

// lib/menu-item/component.tsx
import { styled as styled3 } from "@mui/material/styles";
import { MenuItem as MuiMenuItem } from "@mui/material";
import { jsx as jsx4 } from "react/jsx-runtime";
var StyledMenuItem = styled3(MuiMenuItem)(({ theme }) => ({
  fontFamily: theme.typography.paragraph.md.regular.fontFamily,
  fontSize: theme.typography.paragraph.md.regular.fontSize,
  lineHeight: theme.typography.paragraph.md.regular.lineHeight,
  padding: theme.spacing(3),
  color: theme.palette.menuItem.text,
  backgroundColor: theme.palette.menuItem.background,
  minWidth: 220,
  "&.MuiAutocomplete-option.Mui-focused": {
    backgroundColor: theme.palette.menuItem.background
  },
  "&.MuiMenuItem-divider": {
    borderBottom: `1px solid ${theme.palette.menuItem.divider}`
  },
  "&.menuItemLvl-1": {
    paddingLeft: theme.spacing(9)
  },
  "&.menuItemLvl-2": {
    paddingLeft: theme.spacing(15)
  },
  "&:hover, &.Mui-selected:hover, &.Mui-focusVisible:hover, &.Mui-selected.Mui-focusVisible:hover, &.MuiAutocomplete-option:hover, &.MuiAutocomplete-option[aria-selected=true]:hover": {
    backgroundColor: theme.palette.menuItem.hover.background
  },
  "&:active, &.Mui-selected:active, &.Mui-selected.Mui-focusVisible:active, &.Mui-focusVisible:active, &.MuiAutocomplete-option:active, &.MuiAutocomplete-option[aria-selected=true], &.MuiAutocomplete-option[aria-selected=true].Mui-focused": {
    backgroundColor: `${theme.palette.menuItem.active.background}`
  },
  "&.Mui-focusVisible, &.Mui-selected.Mui-focusVisible": {
    outline: `dashed 1px ${theme.palette.checkbox.outlineFocus}`,
    outlineOffset: "-1px",
    backgroundColor: theme.palette.menuItem.background
  },
  "&.Mui-selected": {
    fontFamily: theme.typography.paragraph.md.medium.fontFamily,
    backgroundColor: theme.palette.menuItem.background
  },
  "&.Mui-disabled": {
    color: theme.palette.menuItem.disabled.text,
    opacity: 1,
    cursor: "not-allowed"
  },
  "&.menuItemHeader": {
    fontSize: theme.typography.paragraph.xs.medium.fontSize,
    lineHeight: theme.typography.paragraph.xs.medium.lineHeight,
    fontFamily: theme.typography.paragraph.xs.medium.fontFamily,
    textTransform: "uppercase",
    tabIndex: "-1",
    pointerEvents: "none",
    backgroundColor: theme.palette.menuItem.headerBackground,
    color: theme.palette.menuItem.headerText
  }
}));
var MenuItem = ({
  children,
  className = "",
  header,
  lvl = 0,
  ...rest
}) => {
  return /* @__PURE__ */ jsx4(
    StyledMenuItem,
    {
      ...rest,
      disableRipple: true,
      disableTouchRipple: true,
      className: `${className} ${header ? "menuItemHeader" : ""} menuItemLvl-${lvl}`,
      children
    }
  );
};

// lib/menu-item/theme.ts
var menuItemTheme = {
  dark: {
    name: "menuItem",
    styles: {
      text: COLORS.SYSTEM.WHITE,
      background: COLORS.SYSTEM.DARK_60,
      headerBackground: COLORS.SYSTEM.INK,
      headerText: COLORS.SYSTEM.SILVER,
      divider: COLORS.SYSTEM.SLATE,
      hover: {
        background: COLORS.SYSTEM.DARK_70
      },
      active: {
        background: COLORS.SYSTEM.DARK_80
      },
      disabled: {
        text: COLORS.SYSTEM.PEWTER
      }
    }
  },
  light: {
    name: "menuItem",
    styles: {
      text: COLORS.SYSTEM.INK,
      background: COLORS.SYSTEM.WHITE,
      headerBackground: COLORS.SYSTEM.OFF_WHITE,
      headerText: COLORS.SYSTEM.DARK_30,
      divider: COLORS.SYSTEM.MISTY,
      hover: {
        background: COLORS.SECONDARY.BLUE_10
      },
      active: {
        background: COLORS.SECONDARY.BLUE_20
      },
      disabled: {
        text: COLORS.SYSTEM.SILVER
      }
    }
  }
};

// lib/menu/component.tsx
import { styled as styled4 } from "@mui/material/styles";
import { jsx as jsx5 } from "react/jsx-runtime";
var StyledMenu = styled4(MuiMenu)(() => ({
  padding: 0,
  ".MuiList-root": {
    padding: 0
  }
}));
var Menu = React2.forwardRef(
  (props, ref) => {
    const propsWithDefault = {
      variant: "default",
      ...props
    };
    return /* @__PURE__ */ jsx5(
      StyledMenu,
      {
        ...omitCustomProps(propsWithDefault, ["variant"]),
        elevation: 1,
        ref,
        className: propsWithDefault.variant ? "menu-breadcrumbs" : "",
        "data-testid": "menu",
        children: propsWithDefault.children
      }
    );
  }
);
var MenuWithCMS = React2.forwardRef(
  ({ contentId, variant, ...rest }, ref) => {
    const intl = useIntl();
    const keys = Object.keys(intl.messages).filter(
      (key) => key.startsWith(`${contentId}.items`) && key.endsWith(".label")
    ).map((key) => intl.messages[key]);
    return /* @__PURE__ */ jsx5(
      StyledMenu,
      {
        ...rest,
        elevation: 1,
        ref,
        className: variant ? "menu-breadcrumbs" : "",
        "data-testid": "menu",
        children: keys.map((item) => /* @__PURE__ */ jsx5(MenuItem, { children: item }, item.toString()))
      }
    );
  }
);

// lib/checkbox/theme.ts
import { styled as styled5 } from "@mui/material";

// lib/form-helper-text/component.tsx
import {
  FormHelperText as MuiFormHelperText
} from "@mui/material";
import { WarningAmberOutlined } from "@mui/icons-material";
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var FormHelperText = (props) => {
  return /* @__PURE__ */ jsxs2(MuiFormHelperText, { ...props, variant: "outlined", children: [
    props.error && /* @__PURE__ */ jsx6(WarningAmberOutlined, {}),
    props.children
  ] });
};

// lib/checkbox/theme.ts
var checkboxTheme = {
  dark: {
    name: "checkbox",
    styles: {
      outlineFocus: COLORS.SECONDARY.BLUE_40,
      subheading: COLORS.SYSTEM.SILVER,
      svgColor: COLORS.SYSTEM.DARK_70,
      default: {
        checked: COLORS.SECONDARY.BLUE_40,
        unchecked: COLORS.SYSTEM.MISTY,
        label: COLORS.SYSTEM.WHITE
      },
      hover: {
        checked: COLORS.SECONDARY.BLUE_30,
        unchecked: COLORS.SECONDARY.BLUE_40,
        label: COLORS.SYSTEM.WHITE
      },
      focus: {
        checked: COLORS.SECONDARY.BLUE_30,
        unchecked: COLORS.SECONDARY.BLUE_40,
        label: COLORS.SYSTEM.WHITE
      },
      error: {
        checked: COLORS.ERROR.ERROR_20,
        unchecked: COLORS.ERROR.ERROR_20,
        label: COLORS.SYSTEM.WHITE
      },
      disabled: {
        checked: COLORS.SYSTEM.PEWTER,
        unchecked: COLORS.SYSTEM.PEWTER,
        label: COLORS.SYSTEM.PEWTER
      }
    }
  },
  light: {
    name: "checkbox",
    styles: {
      outlineFocus: COLORS.SECONDARY.BLUE_60,
      subheading: COLORS.SYSTEM.DARK_30,
      svgColor: COLORS.SYSTEM.WHITE,
      default: {
        checked: COLORS.SECONDARY.BLUE_60,
        unchecked: COLORS.SYSTEM.SLATE,
        label: COLORS.SYSTEM.INK
      },
      hover: {
        checked: COLORS.SECONDARY.BLUE_70,
        unchecked: COLORS.SECONDARY.BLUE_60,
        label: COLORS.SYSTEM.INK
      },
      focus: {
        checked: COLORS.SECONDARY.BLUE_70,
        unchecked: COLORS.SECONDARY.BLUE_60,
        label: COLORS.SYSTEM.INK
      },
      error: {
        checked: COLORS.ERROR.ERROR_40,
        unchecked: COLORS.ERROR.ERROR_40,
        label: COLORS.SYSTEM.INK
      },
      disabled: {
        checked: COLORS.SYSTEM.SILVER,
        unchecked: COLORS.SYSTEM.SILVER,
        label: COLORS.SYSTEM.SILVER
      }
    }
  }
};
var _checkboxTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        outlineFocus: theme.palette.t1.secondary.blue40,
        subheading: theme.palette.t1.system.silver,
        svgColor: theme.palette.t1.system.dark70,
        default: {
          checked: theme.palette.t1.secondary.blue40,
          unchecked: theme.palette.t1.system.misty,
          label: theme.palette.t1.system.white
        },
        hover: {
          checked: theme.palette.t1.secondary.blue30,
          unchecked: theme.palette.t1.secondary.blue40,
          label: theme.palette.t1.system.white
        },
        focus: {
          checked: theme.palette.t1.secondary.blue30,
          unchecked: theme.palette.t1.secondary.blue40,
          label: theme.palette.t1.system.white
        },
        error: {
          checked: theme.palette.t1.error.error20,
          unchecked: theme.palette.t1.error.error20,
          label: theme.palette.t1.system.white
        },
        disabled: {
          checked: theme.palette.t1.system.pewter,
          unchecked: theme.palette.t1.system.pewter,
          label: theme.palette.t1.system.pewter
        }
      };
    }
    case "light": {
      return {
        outlineFocus: theme.palette.t1.secondary.blue60,
        subheading: theme.palette.t1.system.dark30,
        svgColor: theme.palette.t1.system.white,
        default: {
          checked: theme.palette.t1.secondary.blue60,
          unchecked: theme.palette.t1.system.slate,
          label: theme.palette.t1.system.ink
        },
        hover: {
          checked: theme.palette.t1.secondary.blue70,
          unchecked: theme.palette.t1.secondary.blue60,
          label: theme.palette.t1.system.ink
        },
        focus: {
          checked: theme.palette.t1.secondary.blue70,
          unchecked: theme.palette.t1.secondary.blue60,
          label: theme.palette.t1.system.ink
        },
        error: {
          checked: theme.palette.t1.error.error40,
          unchecked: theme.palette.t1.error.error40,
          label: theme.palette.t1.system.ink
        },
        disabled: {
          checked: theme.palette.t1.system.silver,
          unchecked: theme.palette.t1.system.silver,
          label: theme.palette.t1.system.silver
        }
      };
    }
  }
};
var StyledCheckboxHelperText = styled5(FormHelperText)(({
  theme
}) => {
  const palette = _checkboxTheme(theme);
  return {
    fontWeight: theme.typography.fontWeightRegular,
    margin: 0,
    padding: 0,
    transform: `translateX(${theme.spacing(8.5)})`,
    color: palette.subheading,
    fontFamily: theme.typography.paragraph.sm.regular.fontFamily,
    fontSize: theme.typography.paragraph.sm.regular.fontSize,
    lineHeight: theme.typography.paragraph.sm.regular.lineHeight
  };
});

// lib/checkbox/component.tsx
import { useMemo as useMemo3 } from "react";
import { Checkbox as MuiCheckbox } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SvgIcon from "@mui/material/SvgIcon";
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";

// lib/typography/theme.ts
var typographyTheme = {
  dark: {
    name: "typography",
    styles: {
      color: COLORS.SYSTEM.WHITE,
      disabledColor: COLORS.SYSTEM.PEWTER
    }
  },
  light: {
    name: "typography",
    styles: {
      color: COLORS.SYSTEM.INK,
      disabledColor: COLORS.SYSTEM.SILVER
    }
  }
};

// lib/typography/component.tsx
import { Typography as MuiTypography } from "@mui/material";
import { styled as styled6 } from "@mui/material/styles";
import { forwardRef } from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var getHeadingStyles = (theme, heading) => {
  return {
    fontSize: theme.typography[heading].regular.fontSize,
    lineHeight: theme.typography[heading].regular.lineHeight,
    fontFamily: theme.typography[heading].regular.fontFamily,
    [theme.breakpoints.down("smTypo")]: {
      fontSize: theme.typography[`${heading}sm`].regular.fontSize,
      lineHeight: theme.typography[`${heading}sm`].regular.lineHeight,
      fontFamily: theme.typography[`${heading}sm`].regular.fontFamily
    },
    "&.medium": {
      fontSize: theme.typography[heading].medium.fontSize,
      lineHeight: theme.typography[heading].medium.lineHeight,
      fontFamily: theme.typography[heading].medium.fontFamily,
      [theme.breakpoints.down("smTypo")]: {
        fontSize: theme.typography[`${heading}sm`].medium.fontSize,
        lineHeight: theme.typography[`${heading}sm`].medium.lineHeight,
        fontFamily: theme.typography[`${heading}sm`].medium.fontFamily
      }
    },
    "&.bold": {
      fontSize: theme.typography[heading].bold.fontSize,
      lineHeight: theme.typography[heading].bold.lineHeight,
      fontFamily: theme.typography[heading].bold.fontFamily,
      [theme.breakpoints.down("smTypo")]: {
        fontSize: theme.typography[`${heading}sm`].bold.fontSize,
        lineHeight: theme.typography[`${heading}sm`].bold.lineHeight,
        fontFamily: theme.typography[`${heading}sm`].bold.fontFamily
      }
    }
  };
};
var getParagraphStyles = (theme, size) => ({
  fontSize: theme.typography.paragraph[size].regular.fontSize,
  lineHeight: theme.typography.paragraph[size].regular.lineHeight,
  fontFamily: theme.typography.paragraph[size].regular.fontFamily,
  "&.medium": {
    fontSize: theme.typography.paragraph[size].medium.fontSize,
    lineHeight: theme.typography.paragraph[size].medium.lineHeight,
    fontFamily: theme.typography.paragraph[size].medium.fontFamily
  },
  "&.bold, & strong": {
    fontSize: theme.typography.paragraph[size].bold.fontSize,
    lineHeight: theme.typography.paragraph[size].bold.lineHeight,
    fontFamily: theme.typography.paragraph[size].bold.fontFamily
  }
});
var Typography = forwardRef(
  (props, ref) => {
    const propsWithDefault = {
      weight: "regular",
      variant: "paragraphMd",
      ...props
    };
    return /* @__PURE__ */ jsx8(
      StyledTypography,
      {
        ref,
        className: `T1-typography T1-typography-${propsWithDefault.variant} ${propsWithDefault.weight} ${propsWithDefault.className ?? ""}`,
        ...omitCustomProps(propsWithDefault, [
          "className",
          "weight",
          "variant"
        ])
      }
    );
  }
);
var StyledTypography = styled6(MuiTypography)(({
  theme
}) => {
  return {
    "&.T1-typography-h1": getHeadingStyles(theme, "h1"),
    "&.T1-typography-h2": getHeadingStyles(theme, "h2"),
    "&.T1-typography-h3": getHeadingStyles(theme, "h3"),
    "&.T1-typography-h4": getHeadingStyles(theme, "h4"),
    "&.T1-typography-h5": getHeadingStyles(theme, "h5"),
    "&.T1-typography-h6": getHeadingStyles(theme, "h6"),
    "&.T1-typography-caption": {
      fontSize: theme.typography.caption.regular.fontSize,
      lineHeight: theme.typography.caption.regular.lineHeight,
      fontFamily: theme.typography.caption.regular.fontFamily,
      "&.medium": {
        fontSize: theme.typography.caption.medium.fontSize,
        lineHeight: theme.typography.caption.medium.lineHeight,
        fontFamily: theme.typography.caption.medium.fontFamily
      },
      "&.bold": {
        fontSize: theme.typography.caption.bold.fontSize,
        lineHeight: theme.typography.caption.bold.lineHeight,
        fontFamily: theme.typography.caption.bold.fontFamily
      }
    },
    "&.T1-typography-paragraphXl": getParagraphStyles(theme, "xl"),
    "&.T1-typography-paragraphLg": getParagraphStyles(theme, "lg"),
    "&.T1-typography-paragraphMd": getParagraphStyles(theme, "md"),
    "&.T1-typography-paragraphSm": getParagraphStyles(theme, "sm"),
    "&.T1-typography-paragraphXs": getParagraphStyles(theme, "xs"),
    // TO-DO - Check if this line of code is necessary. Removed temporarily because of conflicts in Tile component.
    color: theme.palette.typography.color
  };
});

// lib/buttons/component.tsx
import { Fragment, jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
var Button = ({
  size = "medium",
  loading,
  disabled,
  children,
  contentId,
  cmsOptions,
  className,
  ...props
}) => {
  const getContent = useGetCMSContent();
  const buttonChildren = contentId ? getContent({
    contentId,
    key: cmsOptions?.key || ".label",
    fallbackContent: cmsOptions?.fallbackContent || children,
    values: cmsOptions?.values || {}
  }) : children;
  return /* @__PURE__ */ jsxs4(
    MuiButton,
    {
      disabled: disabled || loading,
      size,
      ...props,
      disableRipple: true,
      className: `T1-button ${className}`,
      children: [
        loading && /* @__PURE__ */ jsx9(
          CircularProgress,
          {
            "data-testid": "circular-progress",
            sx: {
              circle: {
                strokeWidth: STROKE_WIDTH[size]
              }
            }
          }
        ),
        buttonChildren
      ]
    }
  );
};

// lib/drawer/component.tsx
import CloseIcon from "@mui/icons-material/Close";
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
var Drawer = React4.forwardRef(
  ({
    title,
    content,
    anchor,
    element,
    open: openProp,
    onClose,
    variant = "default",
    hideBackdrop
  }, ref) => {
    const [open, setOpen] = React4.useState(openProp ?? false);
    React4.useEffect(() => {
      if (openProp !== void 0) {
        setOpen(openProp);
      }
    }, [openProp]);
    const isDesktop = useMediaQuery2("(min-width:600px)");
    const handleClose = (event) => {
      if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
        return;
      }
      setOpen(false);
      onClose?.(event, "escapeKeyDown");
    };
    const handleOpen = (event) => {
      if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
        return;
      }
      setOpen(true);
    };
    const handlers = useSwipeable({
      onSwipedDown: () => {
        setOpen(false);
        if (onClose) {
          onClose({}, "escapeKeyDown");
        }
      }
    });
    const Puller = () => /* @__PURE__ */ jsx10(Box, { className: "MuiDrawer-header", ...handlers, children: /* @__PURE__ */ jsx10(Box, { component: "span", className: "draggable" }) });
    const isDefault = () => {
      return variant === "default";
    };
    const DrawerContent = (anchor2) => /* @__PURE__ */ jsxs5(
      Box,
      {
        sx: { width: anchor2 === "top" || anchor2 === "bottom" ? "auto" : 420 },
        onKeyDown: (e) => {
          if (e.key === "Escape") {
            handleClose(e);
          }
        },
        component: "nav",
        "aria-label": title,
        "aria-live": "polite",
        className: `${!isDefault() ? "T1-drawerContainer" : ""}`,
        children: [
          /* @__PURE__ */ jsxs5(
            Box,
            {
              className: `MuiDrawer-header ${!isDefault() ? "T1-drawerContainer" : ""}`,
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ jsx10(Typography, { variant: "h3", children: title }),
                !isDefault() && /* @__PURE__ */ jsx10(CloseIcon, { onClick: handleClose })
              ]
            }
          ),
          /* @__PURE__ */ jsx10(
            Box,
            {
              className: `MuiDrawer-container ${!isDefault() ? "T1-drawerContainer" : ""}`,
              "aria-label": "Content",
              children: content
            }
          ),
          !isDefault() && /* @__PURE__ */ jsx10(
            Box,
            {
              className: "MuiDrawer-footer",
              "aria-label": "Footer",
              component: "footer",
              children: /* @__PURE__ */ jsx10(
                Button,
                {
                  "data-testid": "close-button-inner",
                  variant: "secondary",
                  onClick: handleClose,
                  children: "Close"
                }
              )
            }
          )
        ]
      }
    );
    return /* @__PURE__ */ jsxs5(
      Box,
      {
        component: "nav",
        className: `${!isDefault() ? "T1-drawerContainer" : ""}`,
        children: [
          element && React4.cloneElement(element, { onClick: handleOpen }),
          isDesktop ? /* @__PURE__ */ jsx10(
            MuiDrawer,
            {
              anchor,
              open,
              onClose: handleClose,
              "data-testid": "desktop-drawer",
              ref,
              ModalProps: {
                disablePortal: !isDefault()
              },
              PaperProps: { sx: { position: "absolute" } },
              hideBackdrop,
              children: DrawerContent(anchor ?? "left")
            }
          ) : /* @__PURE__ */ jsxs5(
            MuiSwipeableDrawer,
            {
              anchor: "bottom",
              "data-testid": "mobile-drawer",
              open,
              onClose: handleClose,
              onOpen: handleOpen,
              swipeAreaWidth: 56,
              disableSwipeToOpen: false,
              "aria-label": title,
              "aria-live": "polite",
              transitionDuration: { enter: 400, exit: 300 },
              hideBackdrop,
              children: [
                /* @__PURE__ */ jsx10(Puller, {}),
                /* @__PURE__ */ jsx10(Box, { className: "MuiDrawer-container", "aria-label": "Content", children: content })
              ]
            }
          )
        ]
      },
      anchor
    );
  }
);

// lib/drawer/theme.ts
var drawerTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        header: theme.palette.t1.system.dark60,
        borderHeader: theme.palette.t1.system.slate,
        body: theme.palette.t1.system.ink,
        backdrop: theme.palette.t1.system.dark80,
        draggable: theme.palette.t1.system.slate,
        borderFooter: theme.palette.t1.system.slate
      };
    }
    case "light": {
      return {
        header: theme.palette.t1.secondary.blue10,
        borderHeader: theme.palette.t1.transparent,
        body: theme.palette.t1.system.white,
        backdrop: theme.palette.t1.system.dark80,
        draggable: theme.palette.t1.system.cloudy,
        borderFooter: theme.palette.t1.system.misty
      };
    }
  }
};
export {
  Drawer,
  drawerTheme
};
