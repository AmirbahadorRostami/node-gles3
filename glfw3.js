/* THIS IS A GENERATED FILE -- DO NOT EDIT!! */
const glfw3 = require('bindings')('glfw3.node');
module.exports = glfw3;
glfw3.VERSION_MAJOR = 3;
glfw3.VERSION_MINOR = 3;
glfw3.VERSION_REVISION = 0;
glfw3.TRUE = 1;
glfw3.FALSE = 0;
glfw3.RELEASE = 0;
glfw3.PRESS = 1;
glfw3.REPEAT = 2;
glfw3.HAT_CENTERED = 0;
glfw3.HAT_UP = 1;
glfw3.HAT_RIGHT = 2;
glfw3.HAT_DOWN = 4;
glfw3.HAT_LEFT = 8;
glfw3.KEY_UNKNOWN = -1;
glfw3.KEY_SPACE = 32;
glfw3.KEY_APOSTROPHE = 39;
glfw3.KEY_COMMA = 44;
glfw3.KEY_MINUS = 45;
glfw3.KEY_PERIOD = 46;
glfw3.KEY_SLASH = 47;
glfw3.KEY_SEMICOLON = 59;
glfw3.KEY_EQUAL = 61;
glfw3.KEY_A = 65;
glfw3.KEY_B = 66;
glfw3.KEY_C = 67;
glfw3.KEY_D = 68;
glfw3.KEY_E = 69;
glfw3.KEY_F = 70;
glfw3.KEY_G = 71;
glfw3.KEY_H = 72;
glfw3.KEY_I = 73;
glfw3.KEY_J = 74;
glfw3.KEY_K = 75;
glfw3.KEY_L = 76;
glfw3.KEY_M = 77;
glfw3.KEY_N = 78;
glfw3.KEY_O = 79;
glfw3.KEY_P = 80;
glfw3.KEY_Q = 81;
glfw3.KEY_R = 82;
glfw3.KEY_S = 83;
glfw3.KEY_T = 84;
glfw3.KEY_U = 85;
glfw3.KEY_V = 86;
glfw3.KEY_W = 87;
glfw3.KEY_X = 88;
glfw3.KEY_Y = 89;
glfw3.KEY_Z = 90;
glfw3.KEY_LEFT_BRACKET = 91;
glfw3.KEY_BACKSLASH = 92;
glfw3.KEY_RIGHT_BRACKET = 93;
glfw3.KEY_GRAVE_ACCENT = 96;
glfw3.KEY_ESCAPE = 256;
glfw3.KEY_ENTER = 257;
glfw3.KEY_TAB = 258;
glfw3.KEY_BACKSPACE = 259;
glfw3.KEY_INSERT = 260;
glfw3.KEY_DELETE = 261;
glfw3.KEY_RIGHT = 262;
glfw3.KEY_LEFT = 263;
glfw3.KEY_DOWN = 264;
glfw3.KEY_UP = 265;
glfw3.KEY_PAGE_UP = 266;
glfw3.KEY_PAGE_DOWN = 267;
glfw3.KEY_HOME = 268;
glfw3.KEY_END = 269;
glfw3.KEY_CAPS_LOCK = 280;
glfw3.KEY_SCROLL_LOCK = 281;
glfw3.KEY_NUM_LOCK = 282;
glfw3.KEY_PRINT_SCREEN = 283;
glfw3.KEY_PAUSE = 284;
glfw3.KEY_KP_DECIMAL = 330;
glfw3.KEY_KP_DIVIDE = 331;
glfw3.KEY_KP_MULTIPLY = 332;
glfw3.KEY_KP_SUBTRACT = 333;
glfw3.KEY_KP_ADD = 334;
glfw3.KEY_KP_ENTER = 335;
glfw3.KEY_KP_EQUAL = 336;
glfw3.KEY_LEFT_SHIFT = 340;
glfw3.KEY_LEFT_CONTROL = 341;
glfw3.KEY_LEFT_ALT = 342;
glfw3.KEY_LEFT_SUPER = 343;
glfw3.KEY_RIGHT_SHIFT = 344;
glfw3.KEY_RIGHT_CONTROL = 345;
glfw3.KEY_RIGHT_ALT = 346;
glfw3.KEY_RIGHT_SUPER = 347;
glfw3.KEY_MENU = 348;
glfw3.MOD_SHIFT = 0x0001;
glfw3.MOD_CONTROL = 0x0002;
glfw3.MOD_ALT = 0x0004;
glfw3.MOD_SUPER = 0x0008;
glfw3.MOD_CAPS_LOCK = 0x0010;
glfw3.MOD_NUM_LOCK = 0x0020;
glfw3.GAMEPAD_BUTTON_A = 0;
glfw3.GAMEPAD_BUTTON_B = 1;
glfw3.GAMEPAD_BUTTON_X = 2;
glfw3.GAMEPAD_BUTTON_Y = 3;
glfw3.GAMEPAD_BUTTON_LEFT_BUMPER = 4;
glfw3.GAMEPAD_BUTTON_RIGHT_BUMPER = 5;
glfw3.GAMEPAD_BUTTON_BACK = 6;
glfw3.GAMEPAD_BUTTON_START = 7;
glfw3.GAMEPAD_BUTTON_GUIDE = 8;
glfw3.GAMEPAD_BUTTON_LEFT_THUMB = 9;
glfw3.GAMEPAD_BUTTON_RIGHT_THUMB = 10;
glfw3.GAMEPAD_BUTTON_DPAD_UP = 11;
glfw3.GAMEPAD_BUTTON_DPAD_RIGHT = 12;
glfw3.GAMEPAD_BUTTON_DPAD_DOWN = 13;
glfw3.GAMEPAD_BUTTON_DPAD_LEFT = 14;
glfw3.GAMEPAD_AXIS_LEFT_X = 0;
glfw3.GAMEPAD_AXIS_LEFT_Y = 1;
glfw3.GAMEPAD_AXIS_RIGHT_X = 2;
glfw3.GAMEPAD_AXIS_RIGHT_Y = 3;
glfw3.GAMEPAD_AXIS_LEFT_TRIGGER = 4;
glfw3.GAMEPAD_AXIS_RIGHT_TRIGGER = 5;
glfw3.NO_ERROR = 0;
glfw3.NOT_INITIALIZED = 0x00010001;
glfw3.NO_CURRENT_CONTEXT = 0x00010002;
glfw3.INVALID_ENUM = 0x00010003;
glfw3.INVALID_VALUE = 0x00010004;
glfw3.OUT_OF_MEMORY = 0x00010005;
glfw3.API_UNAVAILABLE = 0x00010006;
glfw3.VERSION_UNAVAILABLE = 0x00010007;
glfw3.PLATFORM_ERROR = 0x00010008;
glfw3.FORMAT_UNAVAILABLE = 0x00010009;
glfw3.NO_WINDOW_CONTEXT = 0x0001000;
glfw3.FOCUSED = 0x00020001;
glfw3.ICONIFIED = 0x00020002;
glfw3.RESIZABLE = 0x00020003;
glfw3.VISIBLE = 0x00020004;
glfw3.DECORATED = 0x00020005;
glfw3.AUTO_ICONIFY = 0x00020006;
glfw3.FLOATING = 0x00020007;
glfw3.MAXIMIZED = 0x00020008;
glfw3.CENTER_CURSOR = 0x00020009;
glfw3.TRANSPARENT_FRAMEBUFFER = 0x0002000;
glfw3.HOVERED = 0x0002000;
glfw3.RED_BITS = 0x00021001;
glfw3.GREEN_BITS = 0x00021002;
glfw3.BLUE_BITS = 0x00021003;
glfw3.ALPHA_BITS = 0x00021004;
glfw3.DEPTH_BITS = 0x00021005;
glfw3.STENCIL_BITS = 0x00021006;
glfw3.ACCUM_RED_BITS = 0x00021007;
glfw3.ACCUM_GREEN_BITS = 0x00021008;
glfw3.ACCUM_BLUE_BITS = 0x00021009;
glfw3.ACCUM_ALPHA_BITS = 0x0002100;
glfw3.AUX_BUFFERS = 0x0002100;
glfw3.STEREO = 0x0002100;
glfw3.SAMPLES = 0x0002100;
glfw3.SRGB_CAPABLE = 0x0002100;
glfw3.REFRESH_RATE = 0x0002100;
glfw3.DOUBLEBUFFER = 0x00021010;
glfw3.CLIENT_API = 0x00022001;
glfw3.CONTEXT_VERSION_MAJOR = 0x00022002;
glfw3.CONTEXT_VERSION_MINOR = 0x00022003;
glfw3.CONTEXT_REVISION = 0x00022004;
glfw3.CONTEXT_ROBUSTNESS = 0x00022005;
glfw3.OPENGL_FORWARD_COMPAT = 0x00022006;
glfw3.OPENGL_DEBUG_CONTEXT = 0x00022007;
glfw3.OPENGL_PROFILE = 0x00022008;
glfw3.CONTEXT_RELEASE_BEHAVIOR = 0x00022009;
glfw3.CONTEXT_NO_ERROR = 0x0002200;
glfw3.CONTEXT_CREATION_API = 0x0002200;
glfw3.COCOA_RETINA_FRAMEBUFFER = 0x00023001;
glfw3.COCOA_FRAME_NAME = 0x00023002;
glfw3.COCOA_GRAPHICS_SWITCHING = 0x00023003;
glfw3.NO_API = 0;
glfw3.OPENGL_API = 0x00030001;
glfw3.OPENGL_ES_API = 0x00030002;
glfw3.NO_ROBUSTNESS = 0;
glfw3.NO_RESET_NOTIFICATION = 0x00031001;
glfw3.LOSE_CONTEXT_ON_RESET = 0x00031002;
glfw3.OPENGL_ANY_PROFILE = 0;
glfw3.OPENGL_CORE_PROFILE = 0x00032001;
glfw3.OPENGL_COMPAT_PROFILE = 0x00032002;
glfw3.CURSOR = 0x00033001;
glfw3.STICKY_KEYS = 0x00033002;
glfw3.STICKY_MOUSE_BUTTONS = 0x00033003;
glfw3.LOCK_KEY_MODS = 0x00033004;
glfw3.CURSOR_NORMAL = 0x00034001;
glfw3.CURSOR_HIDDEN = 0x00034002;
glfw3.CURSOR_DISABLED = 0x00034003;
glfw3.ANY_RELEASE_BEHAVIOR = 0;
glfw3.RELEASE_BEHAVIOR_FLUSH = 0x00035001;
glfw3.RELEASE_BEHAVIOR_NONE = 0x00035002;
glfw3.NATIVE_CONTEXT_API = 0x00036001;
glfw3.EGL_CONTEXT_API = 0x00036002;
glfw3.OSMESA_CONTEXT_API = 0x00036003;
glfw3.ARROW_CURSOR = 0x00036001;
glfw3.IBEAM_CURSOR = 0x00036002;
glfw3.CROSSHAIR_CURSOR = 0x00036003;
glfw3.HAND_CURSOR = 0x00036004;
glfw3.HRESIZE_CURSOR = 0x00036005;
glfw3.VRESIZE_CURSOR = 0x00036006;
glfw3.CONNECTED = 0x00040001;
glfw3.DISCONNECTED = 0x00040002;
glfw3.JOYSTICK_HAT_BUTTONS = 0x00050001;
glfw3.COCOA_CHDIR_RESOURCES = 0x00051001;
glfw3.COCOA_MENUBAR = 0x00051002;
glfw3.DONT_CARE = -1;