import { getStage, setStage } from '../models/stage.model.js';
import { gameStart } from './game.handler.js';
import { Tween } from '@tweenjs/tween.js';

export const moveStageHandler = (userId, payload) => {
  levelSelect = function (game) {
    // define needed variables for mygame.LevelSelect
    this.game = game;
    this.holdicons = [];
  };

  levelSelect.prototype = {
    preload: function () {
      this.game.load.spritesheet(
        'levelselecticons',
        '../../public/images/levelselecticons.png',
        96,
        96,
      );
      this.game.load.bitmapFont(
        'font72',
        '../../public/images/font72.png',
        '../../public/font72.xml',
      ); // created with http://kvazars.com/littera/

      this.initProgressData();
    },

    create: function () {
      this.game.stage.backgroundColor = 0x80a0ff;
      this.game.add.bitmapText(256, 24, 'font72', 'Select a level!', 48);

      this.createLevelIcons();
      this.animateLevelIcons();
    },

    update: function () {
      // nothing to do but wait until player selects a level
    },

    render: function () {
      // display some debug info..?
    },

    initProgressData: function () {
      // array might be undefined at first time start up
      if (!PLAYER_DATA) {
        // retrieve from local storage (to view in Chrome, Ctrl+Shift+J -> Resources -> Local Storage)
        const str = window.localStorage.getItem('mygame_progress');

        // error checking, localstorage might not exist yet at first time start up
        try {
          PLAYER_DATA = JSON.parse(str);
        } catch (e) {
          PLAYER_DATA = []; //error in the above string(in this case,yes)!
        }
        // error checking just to be sure, if localstorage contains something else then a JSON array (hackers?)
        if (Object.prototype.toString.call(PLAYER_DATA) !== '[object Array]') {
          PLAYER_DATA = [];
        }
      }
    },

    createLevelIcons: function () {
      const levelnr = 0;

      for (const y = 0; y < 3; y++) {
        for (const x = 0; x < 4; x++) {
          // next level
          levelnr = levelnr + 1;

          // check if array not yet initialised
          if (typeof PLAYER_DATA[levelnr - 1] !== 'number') {
            // value is null or undefined, i.e. array not defined or too short between app upgrades with more levels
            if (levelnr == 1) {
              PLAYER_DATA[levelnr - 1] = 0; // level 1 should never be locked
            } else {
              PLAYER_DATA[levelnr - 1] = -1;
            }
          }

          // player progress info for this level
          const playdata = PLAYER_DATA[levelnr - 1];

          // decide which icon
          const isLocked = true; // locked
          const stars = 0; // no stars

          // check if level is unlocked
          if (playdata > -1) {
            isLocked = false; // unlocked
            if (playdata < 4) {
              stars = playdata;
            } // 0..3 stars
          }

          // calculate position on screen
          const xpos = 160 + x * 128;
          const ypos = 120 + y * 128;

          // create icon
          this.holdicons[levelnr - 1] = this.createLevelIcon(xpos, ypos, levelnr, isLocked, stars);
          const backicon = this.holdicons[levelnr - 1].getAt(0);

          // keep level nr, used in onclick method
          backicon.health = levelnr;

          // input handler
          backicon.inputEnabled = true;
          backicon.events.onInputDown.add(this.onSpriteDown, this);
        }
      }
    },

    // -------------------------------------
    // Add level icon buttons
    // -------------------------------------
    createLevelIcon: function (xpos, ypos, levelnr, isLocked, stars) {
      // create new group
      const iconGroup = this.game.add.group();
      iconGroup.x = xpos;
      iconGroup.y = ypos;

      // keep original position, for restoring after certain tweens
      iconGroup.xOrg = xpos;
      iconGroup.yOrg = ypos;

      // determine background frame
      const frame = 0;
      if (isLocked == false) {
        frame = 1;
      }

      // add background
      const icon1 = this.game.add.sprite(0, 0, 'levelselecticons', frame);
      iconGroup.add(icon1);

      // add stars, if needed
      if (isLocked == false) {
        const txt = this.game.add.bitmapText(24, 16, 'font72', '' + levelnr, 48);
        const icon2 = this.game.add.sprite(0, 0, 'levelselecticons', 2 + stars);

        iconGroup.add(txt);
        iconGroup.add(icon2);
      }

      return iconGroup;
    },

    onSpriteDown: function (sprite, pointer) {
      // retrieve the iconlevel
      const levelnr = sprite.health;

      if (PLAYER_DATA[levelnr - 1] < 0) {
        // indicate it's locked by shaking left/right
        const iconGroup = this.holdicons[levelnr - 1];
        const xpos = iconGroup.xOrg;

        const tween = this.game.add
          .tween(iconGroup)
          .to({ x: xpos + 6 }, 20, Phaser.Easing.Linear.None)
          .to({ x: xpos - 5 }, 20, Phaser.Easing.Linear.None)
          .to({ x: xpos + 4 }, 20, Phaser.Easing.Linear.None)
          .to({ x: xpos - 3 }, 20, Phaser.Easing.Linear.None)
          .to({ x: xpos + 2 }, 20, Phaser.Easing.Linear.None)
          .to({ x: xpos }, 20, Phaser.Easing.Linear.None)
          .start();
      } else {
        // simulate button press animation to indicate selection
        const iconGroup = this.holdicons[levelnr - 1];
        const tween = this.game.add
          .tween(iconGroup.scale)
          .to({ x: 0.9, y: 0.9 }, 100, Phaser.Easing.Linear.None)
          .to({ x: 1.0, y: 1.0 }, 100, Phaser.Easing.Linear.None)
          .start();

        // it's a little tricky to pass selected levelnr to callback function, but this works:
        tween._lastChild.onComplete.add(function () {
          this.onLevelSelected(sprite.health);
        }, this);
      }
    },

    animateLevelIcons: function () {
      // slide all icons into screen
      for (const i = 0; i < this.holdicons.length; i++) {
        // get variables
        const iconGroup = this.holdicons[i];
        iconGroup.y = iconGroup.y + 600;
        const y = iconGroup.y;

        // tween animation
        this.game.add
          .tween(iconGroup)
          .to({ y: y - 600 }, 500, Phaser.Easing.Back.Out, true, i * 40);
      }
    },

    onLevelSelected: function (levelnr) {
      // pass levelnr variable to 'Game' state
      this.game.state.states['game']._levelNumber = levelnr;

      this.state.start('game');
    },
  };
};
