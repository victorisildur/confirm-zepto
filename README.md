# confirm

Android webview has a poor design of window.confirm().
This modules replace window.confirm() with a iOS style dialog, providing uniform UX across all platforms.

# Install

```npm install confirm-zepto```

# Prerequisite

Zepto or jQuery, $ symbol needs to be global.

# Usage

```javascript
confirm({
    title: 'Please input whatever you want:',
    negative: 'cancel',
    positive: 'ok',
    callback: function(isSuccess) {
        // callback isSuccess{boolean}
    }
});
```

# Options

* title: title
* negative: text of negative button, optional, default to be 'cancel'
* positive: text of positive button, optional, default to be 'ok'
* callback: callback function when button is clicked

no css is required! it's built-in by webpack

# Change Logs

* 1.0.5: long title display bug fix