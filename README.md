# HerokuGram

A :zap: Quick Telegram Starter Pack For NodeJS To be Deployed On Heroku.

[![https://github.com/kamikazechaser/LiveCoinBot/blob/master/LICENSE.md](https://img.shields.io/badge/license-GNU%20GPLv3-lightgrey.svg)](https://github.com/kamikazechaser/LiveCoinBot/blob/master/LICENSE.md)
[![https://telegram.me/herokugrambot](https://img.shields.io/badge/%F0%9F%92%AC_Telegram-HerokuGram%20Bot-blue.svg)](https://telegram.me/herokugrambot)
[![https://telegram.me/kamikazechaser](https://img.shields.io/badge/%F0%9F%92%AC_Telegram-kamikazechaser-blue.svg)](https://telegram.me/kamikazechaser)

## Information

### How Does It Work?

This Quick Start pack combines Express and body-parser middleware to set up a webhook on Telegram, allowing you to run your bot on Heroku.

### Nodeogram

This pack utilises [Nodeogram](https://github.com/ALCC01/nodeogram), a very easy NodeJS module for writing Telegram Bots. It is also up to date with the bot API. Ensure you check out the documentaion [here](https://dev.albertocoscia.me/nodeogram/)

### Why Was This Pack Made?

To obviously host your bot for FREE!

### Deployment

Deploy using any method on [Heroku](https://www.heroku.com). DropBox method is the easiest of them all. Just download, unzip and push to Heroku.

### Keep Bot Alive

As usual, Heroku will shut down the bot due to inactivity after a few hours. Use [UptimeRobot](https://uptimerobot.com) to ping your app (https://<Your App Name>.herokuapp.com) at short intervals

### Heroku Hibernated My Bot, What Do I Do?

Simply login to Heroku and click "Open app". This should setup the web-hook again and display the HerokuGram vesrion in JSON.

### Breakage Warning

Do not attempt to modify the `package.json` scripts or where quoted in `bot.js` as this will instantly crash the bot. Only change the token and add your code below `bot.init();`

## Examples Of Bots Using HerokuGram

[@powercalcbot](https://telegram.me/powercalcbot)
[@herokugrambot](https://telegram.me/herokugrambot)


## License
 
    HerokuGram
    Copyright (C) 2016 Mohammed Sohail <kamikazechaser.github.io>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
