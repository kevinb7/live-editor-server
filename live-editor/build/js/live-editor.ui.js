this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["tipbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, tmp1, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "Oh noes!";}

function program3(depth0,data) {
  
  
  return "Show me where";}

  buffer += "<div class=\"tipbar\">\n    <div class=\"speech-arrow\"></div>\n    <div class=\"error-buddy\"></div>\n    <div class=\"tipnav\">\n        <a href=\"\" class=\"prev\"><span class=\"ui-icon ui-icon-circle-triangle-w\"></span></a>\n        <span class=\"current-pos\"></span>\n        <a href=\"\" class=\"next\"><span class=\"ui-icon ui-icon-circle-triangle-e\"></span></a>\n    </div>\n    <div class=\"text-wrap\">\n        <div class=\"oh-no\">";
  foundHelper = helpers['_'];
  stack1 = foundHelper || depth0['_'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n        <div class=\"message\"></div>\n        <div class=\"show-me\"><a href>";
  foundHelper = helpers['_'];
  stack1 = foundHelper || depth0['_'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></div>\n    </div>\n</div>";
  return buffer;});;
/**
 * This is called tipbar for historical reasons.
 * Originally, it appeared as a red bar sliding up from the bottom of the
 * canvas. Now it just powers the error reporting mechanism, which no longer
 * looks like a bar
 */

window.TipBar = Backbone.View.extend({
    initialize: function(options) {
        this.liveEditor = options.liveEditor;
        this.pos = 0;
        this.texts = [];
        this.render();
        this.bind();
    },

    render: function() {
        this.$overlay = $("<div class=\"overlay error-overlay\" style=\"display: none\"></div>").appendTo(this.$el);
        this.$el.append(Handlebars.templates["tipbar"]());
    },

    bind: function() {
        var self = this;

        this.$el.on("click", ".tipbar .tipnav a", function(e) {
            if (!$(this).hasClass("ui-state-disabled")) {
                self.pos += $(this).hasClass("next") ? 1 : -1;
                self.show();
            }

            self.liveEditor.editor.focus();

            return false;
        });

        this.$el.on("click", ".tipbar .text-wrap a", function(e) {
            var error = self.texts[self.pos];

            self.liveEditor.editor.setCursor(error);
            self.liveEditor.editor.setErrorHighlight(true);

            return false;
        });
    },

    show: function(texts) {
        if (texts) {
            this.pos = 0;
            this.texts = texts;
        } else {
            texts = this.texts;
        }


        var pos = this.pos;
        var bar = this.$el.find(".tipbar");

        // Inject current text
        bar
            .find(".current-pos").text(texts.length > 1 ? (pos + 1) + "/" + texts.length : "").end()
            .find(".message").html(texts[pos].text || texts[pos] || "").end()
            .find("a.prev").toggleClass("ui-state-disabled", pos === 0).end()
            .find("a.next").toggleClass("ui-state-disabled", pos + 1 === texts.length).end();

        this.$el.find(".show-me").toggle(texts[pos].row !== -1);

        bar.find(".tipnav").toggle(texts.length > 1);

        bar.show();
    },

    hide: function() {
        var bar = this.$el.find(".tipbar");
        bar.hide();
        clearTimeout(this.errorDelay);
    },

    toggleErrors: function(errors) {
        var hasErrors = !!errors.length;

        this.$overlay.toggle(hasErrors);

        if (!hasErrors) {
            this.hide();
            return;
        }

        this.errorDelay = setTimeout( function() {
            this.show(errors);
        }.bind(this), 1200);
    }
});
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["live-editor"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <button id=\"save-program\" class=\"simple-button pull-left\">\n        ";
  foundHelper = helpers['_'];
  stack1 = foundHelper || depth0['_'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </button>\n    ";
  return buffer;}
function program2(depth0,data) {
  
  
  return "Save";}

function program4(depth0,data) {
  
  
  return "Open Output Window";}

function program6(depth0,data) {
  
  
  return "Restart";}

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <button id=\"capture-screenshot\" class=\"simple-button pull-right\">\n        ";
  foundHelper = helpers['_'];
  stack1 = foundHelper || depth0['_'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </button>\n    ";
  return buffer;}
function program9(depth0,data) {
  
  
  return "Screenshot";}

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <a href=\"\" class=\"draw-color-button\" id=\"";
  stack1 = depth0;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "this", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n                <span></span>\n            </a>\n        ";
  return buffer;}

function program13(depth0,data) {
  
  
  return "Record";}

function program15(depth0,data) {
  
  
  return "Loading...";}

function program17(depth0,data) {
  
  
  return "Loading...";}

function program19(depth0,data) {
  
  
  return "Enable Flash to load audio:";}

function program21(depth0,data) {
  
  
  return "Play";}

function program23(depth0,data) {
  
  
  return "Loading audio...";}

  buffer += "<div class=\"scratchpad-toolbar\">\n    ";
  foundHelper = helpers.allowSave;
  stack1 = foundHelper || depth0.allowSave;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <span>&nbsp;</span>\n    <button id=\"open-output-window\" class=\"simple-button pull-right\">\n        ";
  foundHelper = helpers['_'];
  stack1 = foundHelper || depth0['_'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </button>\n    <button id=\"restart-code\" class=\"simple-button pull-right\">\n        <span class=\"icon-refresh\"></span>\n        ";
  foundHelper = helpers['_'];
  stack1 = foundHelper || depth0['_'];
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </button>\n    ";
  foundHelper = helpers.allowScreenshot;
  stack1 = foundHelper || depth0.allowScreenshot;
  stack2 = helpers['if'];
  tmp1 = self.program(8, program8, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <!-- Widgets for selecting colors to doodle on the canvas during\n        recordings -->\n    <div id=\"draw-widgets\" style=\"display:none;\">\n        <a href=\"\" id=\"draw-clear-button\" class=\"ui-button\">\n            <span class=\"ui-icon-cancel\"></span>\n        </a>\n        ";
  foundHelper = helpers.colors;
  stack1 = foundHelper || depth0.colors;
  stack2 = helpers.each;
  tmp1 = self.program(11, program11, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <!-- Record button -->\n    <button id=\"record\" class=\"simple-button pull-left\" style=\"display:none;\">";
  foundHelper = helpers['_'];
  stack1 = foundHelper || depth0['_'];
  tmp1 = self.program(13, program13, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>\n\n<div class=\"scratchpad-wrap\">\n    <!-- Canvases (Drawing + Output) -->\n    <div class=\"scratchpad-canvas-wrap\">\n        <div id=\"output\">\n            <!-- Extra data-src attribute to work around\n                 cross-origin access policies. -->\n            <!--<iframe id=\"output-frame\"-->\n                <!--src=\"";
  foundHelper = helpers.execFile;
  stack1 = foundHelper || depth0.execFile;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "execFile", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"-->\n                <!--data-src=\"";
  foundHelper = helpers.execFile;
  stack1 = foundHelper || depth0.execFile;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "execFile", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></iframe>-->\n            <!--<canvas class=\"scratchpad-draw-canvas\" style=\"display:none;\"-->\n                <!--width=\"400\" height=\"400\"></canvas>-->\n\n            <!--<div class=\"overlay disable-overlay\" style=\"display:none;\">-->\n            <!--</div>-->\n\n            <!--<div class=\"scratchpad-canvas-loading\">-->\n                <!--<img src=\"";
  foundHelper = helpers.imagesDir;
  stack1 = foundHelper || depth0.imagesDir;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "imagesDir", { hash: {} }); }
  buffer += escapeExpression(stack1) + "/throbber-full.gif\">-->\n                <!--<span class=\"hide-text\">";
  foundHelper = helpers['_'];
  stack1 = foundHelper || depth0['_'];
  tmp1 = self.program(15, program15, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>-->\n            <!--</div>-->\n        </div>\n    </div>\n\n    <!-- Editor -->\n    <div class=\"scratchpad-editor-wrap overlay-container\">\n        <div class=\"scratchpad-editor-tabs\">\n          <div id=\"scratchpad-code-editor-tab\" class=\"scratchpad-editor-tab\">\n            <div class=\"scratchpad-editor scratchpad-ace-editor\"></div>\n            <div class=\"overlay disable-overlay\" style=\"display:none;\">\n            </div>\n\n            <div class=\"scratchpad-editor-bigplay-loading\" style=\"display:none;\">\n                <img src=\"";
  foundHelper = helpers.imagesDir;
  stack1 = foundHelper || depth0.imagesDir;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "imagesDir", { hash: {} }); }
  buffer += escapeExpression(stack1) + "/throbber-full.gif\">\n                <span class=\"hide-text\">";
  foundHelper = helpers['_'];
  stack1 = foundHelper || depth0['_'];
  tmp1 = self.program(17, program17, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n            </div>\n\n            <!-- This cannot be removed, if we want Flash to keep working! -->\n            <div id=\"sm2-container\">\n                ";
  foundHelper = helpers['_'];
  stack1 = foundHelper || depth0['_'];
  tmp1 = self.program(19, program19, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <br>\n            </div>\n\n            <button class=\"scratchpad-editor-bigplay-button\" style=\"display:none;\">\n                <span class=\"icon-play\"></span>\n                <span class=\"hide-text\">";
  foundHelper = helpers['_'];
  stack1 = foundHelper || depth0['_'];
  tmp1 = self.program(21, program21, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n            </button>\n          </div>\n        </div>\n\n        <div class=\"scratchpad-toolbar\">\n            <!-- Row for playback controls -->\n            <div class=\"scratchpad-playbar\" style=\"display:none;\">\n                <div class=\"scratchpad-playbar-area\" style=\"display:none;\">\n                    <button\n                        class=\"simple-button primary scratchpad-playbar-play\"\n                        type=\"button\">\n                        <span class=\"icon-play\"></span>\n                    </button>\n\n                    <div class=\"scratchpad-playbar-progress\"></div>\n\n                    <span class=\"scratchpad-playbar-timeleft\"></span>\n                </div>\n                <div class=\"loading-msg\">\n                    ";
  foundHelper = helpers['_'];
  stack1 = foundHelper || depth0['_'];
  tmp1 = self.program(23, program23, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </div>\n            </div>\n        </div>\n\n        <div class=\"scratchpad-toolbar scratchpad-dev-record-row\" style=\"display:none;\"></div>\n    </div>\n</div>";
  return buffer;});;
window.ScratchpadDrawCanvas = Backbone.View.extend({
    initialize: function(options) {
        this.record = options.record;

        this.isDrawing = false;

        if (this.el) {
            this.ctx = this.el.getContext("2d");
        }
        
        if (this.ctx) {
            this.ctx.shadowBlur = 2;
            this.ctx.lineCap = "round";
            this.ctx.lineJoin = "round";
            this.ctx.lineWidth = 1;
        }

        this.clear(true);

        if (this.record) {
            this.bindRecordView();
        }
    },

    commands: ["startLine", "drawLine", "endLine", "setColor", "clear"],

    colors: {
        black: [0, 0, 0],
        red: [255, 0, 0],
        orange: [255, 165, 0],
        green: [0, 128, 0],
        blue: [0, 0, 255],
        lightblue: [173, 216, 230],
        violet: [128, 0, 128]
    },

    remove: function() {
        // Clear and reset canvas
        this.clear(true);
        this.endDraw();

        // Remove all bound events from draw canvas
        this.$el.off(".draw-canvas");

        // Remove all bound events from document
        $(document).off(".draw-canvas");
    },

    bindRecordView: function() {
        var self = this;
        var record = this.record;

        this.$el.on({
            "mousedown.draw-canvas": function(e) {
                // Left mouse button
                if (record.recording && e.button === 0) {
                    self.startLine(e.offsetX, e.offsetY);
                    e.preventDefault();
                }
            },

            "mousemove.draw-canvas": function(e) {
                if (record.recording) {
                    self.drawLine(e.offsetX, e.offsetY);
                }
            },

            "mouseup.draw-canvas": function(e) {
                if (record.recording) {
                    self.endLine();
                }
            },

            "mouseout.draw-canvas": function(e) {
                if (record.recording) {
                    self.endLine();
                }
            }
        });

        record.on("runSeek", function() {
            self.clear(true);
            self.endDraw();
        });

        // Handle record seek caching
        record.seekCachers.canvas = {
            getState: function() {
                if (!self.isDrawing) {
                    return;
                }

                // Copy the canvas contents
                var tmpCanvas = document.createElement("canvas");
                tmpCanvas.width = tmpCanvas.height = self.el.width;
                tmpCanvas.getContext("2d").drawImage(self.el, 0, 0);

                // Store Canvas state
                return {
                    x: self.x,
                    y: self.y,
                    down: self.down,
                    color: self.color,
                    canvas: tmpCanvas
                };
            },

            restoreState: function(cacheData) {
                self.startDraw();

                // Restore Canvas state
                self.x = cacheData.x;
                self.y = cacheData.y;
                self.down = cacheData.down;
                self.setColor(cacheData.color);

                // Restore canvas image
                // Disable shadow (otherwise the image will have a shadow!)
                var oldShadow = self.ctx.shadowColor;
                self.ctx.shadowColor = "rgba(0,0,0,0.0)";
                self.ctx.drawImage(cacheData.canvas, 0, 0);
                self.ctx.shadowColor = oldShadow;
            }
        };

        // Initialize playback commands
        _.each(this.commands, function(name) {
            record.handlers[name] = function() {
                self[name].apply(self, arguments);
            };
        });
    },

    startLine: function(x, y) {
        if (!this.down) {
            this.down = true;
            this.x = x;
            this.y = y;

            this.record.log("startLine", x, y);
        }
    },

    drawLine: function(x, y) {
        if (this.down && this.x != null && this.y != null) {
            if (this.ctx) {
                this.ctx.beginPath();
                this.ctx.moveTo(this.x, this.y);
                this.ctx.lineTo(x, y);
                this.ctx.stroke();
                this.ctx.closePath();   
            }

            this.x = x;
            this.y = y;

            this.record.log("drawLine", x, y);
        }
    },

    endLine: function() {
        if (this.down) {
            this.down = false;
            this.record.log("endLine");
        }
    },

    setColor: function(color) {
        if (color != null) {
            if (!this.isDrawing) {
                this.startDraw(true);
            }

            this.color = color;

            if (this.ctx) {
                this.ctx.shadowColor = "rgba(" + this.colors[color] + ",0.5)";
                this.ctx.strokeStyle = "rgba(" + this.colors[color] + ",1.0)";
            }
            
            this.record.log("setColor", color);
        }

        this.trigger("colorSet", color);
    },

    clear: function(force) {
        // Clean off the canvas
        // TODO(kevinb7) figure out who's clearing the canvas in output.html
        if (this.ctx) {
            this.ctx.clearRect(0, 0, 600, 480);
        }
        this.x = null;
        this.y = null;
        this.down = false;

        if (force !== true) {
            this.record.log("clear");
        }
    },

    startDraw: function(colorDone) {
        if (this.isDrawing) {
            return;
        }

        this.isDrawing = true;

        if (colorDone !== true) {
            this.setColor("black");
        }

        this.trigger("drawStarted");
    },

    endDraw: function() {
        if (!this.isDrawing) {
            return;
        }

        this.isDrawing = false;
        this.setColor(null);
        this.trigger("drawEnded");
    }
});
/* Manages the audio chunks as we build up this recording. */
window.ScratchpadAudioChunks = Backbone.Model.extend({

    initialize: function(options) {
        // The saved audio chunks
        this.audioChunks = [];
        // The current chunk we have not yet saved or discarded
        this.currentChunk = null;
    },

    setCurrentChunk: function(recording) {
        this.currentChunk = recording;
    },

    currentChunkExists: function() {
        return !_.isNull(this.currentChunk);
    },

    startNewChunk: function() {
        this.currentChunk = null;
    },

    discardCurrentChunk: function() {
        this.currentChunk = null;
    },

    saveCurrentChunk: function() {
        if (!this.currentChunk) {
            return;
        }
        this.audioChunks.push(this.currentChunk);
        this.currentChunk = null;
    },

    /* Return the array of audio chunks, not yet stitched together. */
    getAllChunks: function() {
        return this.audioChunks;
    }
});


/* Builds up audio and the command chunks for our recording, coordinates
 *  the process.
 *
 *  Heads-up that bugs with recording in chunks sometimes occur due to
 *  buggy playback with the Record object, which also occurs when playing
 *  normal talkies. Recording in chunks depends on Record playback to
 *  restore state after a discard, and so any Record bugs also cause bugs in
 *  recording in chunks.
 */
window.ScratchpadRecordView = Backbone.View.extend({
    initialize: function(options) {
        this.render();
        this.$recordButton = options.recordButton;
        this.$finalSaveButton = options.saveButton;
        this.editor = options.editor;
        this.record = options.record;
        this.config = options.config;
        this.drawCanvas = options.drawCanvas;
        this.workersDir = options.workersDir;
        this.transloaditTemplate = options.transloaditTemplate;
        this.transloaditAuthKey = options.transloaditAuthKey;
        this.audioChunks = new ScratchpadAudioChunks();
        this.recordInProgress = false;
        this.commandChunks = [];
        this.startingCode = "";
        this.lastSavedCode = this.editor.text();
        this.$lastAudioChunkElem = this.$el.find(".last-audio-chunk");
        // Note: $savedAudioChunksElem HAS to be displayed in order for us to
        //  get the duration. Hack -- look at other ways to get the duration.
        this.$savedAudioChunksElem = this.$el.find(".saved-audio-chunks");
        this.initializeButtons();
    },

    render: function() {
        this.$el.html(Handlebars.templates["dev-record"]({})).show();
    },

    initializeButtons: function() {
        // Set up the buttons
        this.$newChunkButton = this.$el.find(".scratchpad-dev-new-chunk");
        this.$discardChunkButton =
            this.$el.find(".scratchpad-dev-discard-chunk");
        this.$saveChunkButton = this.$el.find(".scratchpad-dev-save-chunk");
        this.$refreshEditorButton =
            this.$el.find(".scratchpad-dev-refresh-editor-state");
        // Disable chunk buttons to start
        this.disableChunkButtons(true, true, true, true, false);
        // Bind event listeners
        this.$newChunkButton.on("click", _.bind(this.newChunk, this));
        this.$discardChunkButton.on("click", _.bind(this.discardChunk, this));
        this.$saveChunkButton.on("click", _.bind(this.saveChunk, this));
        this.$refreshEditorButton.on("click", _.bind(this.refreshEditor, this));
    },

    /* Set up everything and get permission for recording. */
    initializeRecordingAudio: function() {
        // Start recording the presenter's audio
        this.multirecorder = new MultiRecorder({
            workerPath: this.workersDir + "shared/multirecorder-worker.js"
        });
        this.$recordButton.text("Use the chunks (and give permission)");
        this.setButtonDisableStatus(this.$recordButton, true);
        this.disableChunkButtons(false, true, true, true, true);
    },

    /* Start recording audio after a brief countdown for preparation.
     *   Leads to startRecordingCommands() being called,
     *   so no need to call startRecordingCommands manually.
     */
    startRecordingAudio: function() {
        var self = this;

        this.lastSavedCode = this.editor.text();
        this.multirecorder.startRecording(1)
            .progress(_.bind(function(seconds) {
                this.$newChunkButton.text(seconds + "...");
            }, this))
            .done(_.bind(function() {
                this.disableChunkButtons(false, true, true, true, true);
                self.record.recordingAudio = true;
                this.$newChunkButton.html("Stop recording chunk");
                this.startRecordingCommands();
            }, this));
    },

    /* Stop recording audio. Called from ScratchpadUI as a result of the
     *  call to stopRecordingCommands. */
    stopRecordingAudio: function() {
        this.multirecorder.stopRecording()
            .done(_.bind(function(recording) {
                this.audioChunks.setCurrentChunk(recording);
                this.$lastAudioChunkElem.html(recording.createAudioPlayer());
            }, this));
    },

    /* Display a sound player with all the saved audio chunks. */
    showSavedAudioChunks: function() {
        this.getFinalAudioRecording(_.bind(function(saved) {
            this.$savedAudioChunksElem.html(saved.createAudioPlayer());
        }, this));
    },


    /* Hack to return the duration of the saved audio, if it exists.
     *
     * Depends on the savedAudioChunkElem always being updated when we
     * add a new saved audio chunk. Note that we do not set the duration
     * right after creating the savedAudioChunkElem because the elem has
     * to load and become ready first. Between creating the elem and calling
     * this function, the hacky assumption is that it has been "long enough"
     * for the audio elem to load. This is pretty gross.
     */
    getDurationMsOfSavedAudio: function() {
        var durationMs = 0;
        var audioElem = $(this.$savedAudioChunksElem).find("audio");
        if (audioElem && audioElem.length > 0) {
            durationMs = audioElem[0].duration * 1000;
        }
        return durationMs;
    },

    /* Start recording user commands. Should only be called from
     *  startRecordingAudio. */
    startRecordingCommands: function() {
        if (this.record.hasNoChunks()) {
            // Save the initial code state
            //this.scratchpad.get("revision")
            //    .set("code", this.editor.text());
            this.startingCode = this.editor.text();
            var newVersion = this.config.curVersion();
            // Make sure we record using the scratchpad version
            this.config.switchVersion(newVersion);
            this.record.setActualInitData({
                configVersion: newVersion,
                code: this.startingCode
            });
        }

        // Focus on the editor
        this.editor.focus();
        // Start recording
        this.record.startRecordChunk(this.getDurationMsOfSavedAudio());
        // Every chunk should start the cursor at 0, 0 and log the event.
        this.record.log("select", 0, 0);
        this.editor.setCursor({row: 0, column: 0});
    },

    /* Stop recording commands. This will trigger an event sequence that
     *    will lead to stopRecordingAudio being called as well.
     *
     * Currently assumes that when we stop recording commands, we want
     * to upload the recording.
     */
    stopRecordingCommands: function() {
        this.record.stopRecordChunk();
    },

    /* Return the final audio recording, with all the audio chunks stitched
     *  together. */
    getFinalAudioRecording: function(callback) {
        this.multirecorder.combineRecordings(this.audioChunks.getAllChunks())
            .done(callback);
    },

    /* Return the final commands recording, with all the command chunks
     *  stitched together. */
    getFinalCommandRecording: function() {
        return this.record.dumpRecording();
    },

    /* Start recording a new chunk, or stop recording the current chunk
     *  (the button toggles) */
    newChunk: function() {
        if (this.audioChunks.currentChunkExists()) {
            return;
        }
        if (!this.recordInProgress) {
            // Start recording an new chunk
            this.editor.editor.setReadOnly(false);
            this.recordInProgress = true;
            this.startRecordingAudio();
        } else {
            // Stop recording the current chunk
            this.recordInProgress = false;
            this.stopRecordingCommands();  // Leads to stopRecordingAudio
            this.disableChunkButtons(true, false, false, true, true);
            this.$newChunkButton.html("Start new chunk");
        }
    },

    /* Discard the chunk we just recorded.
     *  Requires replaying all of the existing commands again to get the
     *  code + canvas back into the right state.
     *  Unfortunately, this is the biggest source of bugs right now since
     *  Record playback is separately buggy :/
     */
    discardChunk: function(evt) {
        if (!this.audioChunks.currentChunkExists()) {
            return;
        }
        this.audioChunks.discardCurrentChunk();
        this.record.discardRecordChunk();
        this.$lastAudioChunkElem.empty();
        this.refreshEditor();
    },

    /* Save the chunk we just recorded. */
    saveChunk: function(evt) {
        if (!this.audioChunks.currentChunkExists()) {
            return;
        }
        this.audioChunks.saveCurrentChunk();
        this.record.saveRecordChunk();
        this.lastSavedCode = this.editor.text();
        this.disableChunkButtons(false, true, true, false, false);
        this.showSavedAudioChunks();
        this.$lastAudioChunkElem.empty();
    },

    /* Play back all the saved chunks to get back to the last
     *  saved state. */
    refreshEditor: function(evt) {
        this.record.loadRecording(this.record.dumpRecording());
        this.editor.editor.setReadOnly(false);
        this.record.initData = this.record.actualInitData;
        // Add an empty command to force the Record playback to
        // keep playing until the audio track finishes playing
        if (this.record.commands) {
            this.record.commands.push([
                this.getDurationMsOfSavedAudio(), "seek"
            ]);
        }
        // Start the play head at 0
        this.record.time = 0;

        // Reset the editor
        this.editor.text(this.startingCode);
        // Clear and hide the drawing area
        this.drawCanvas.clear(true);
        this.drawCanvas.endDraw();
        this.record.seekTo(this.getDurationMsOfSavedAudio());

        // Set a timeout just to wait for all the commands to finish..
        setTimeout(_.bind(function() {
            this.disableChunkButtons(false, true, true, false, false);
        }, this), 1000);
    },

    /*
     * Quick way to set the disabled state for lots of recording-related
     *  buttons at once.
     */
    disableChunkButtons: function(newBool, discardBool, saveBool, refreshBool, finalBool) {
        this.setButtonDisableStatus(this.$newChunkButton, newBool);
        this.setButtonDisableStatus(this.$discardChunkButton, discardBool);
        this.setButtonDisableStatus(this.$saveChunkButton, saveBool);
        this.setButtonDisableStatus(this.$refreshEditorButton, refreshBool);
        this.setButtonDisableStatus(this.$finalSaveButton, finalBool);
    },

    /* Updated the button to the disabledStatus, if defined. */
    setButtonDisableStatus: function($button, disabledStatus) {
        if (!_.isUndefined(disabledStatus)) {
            $button.prop("disabled", disabledStatus);
        }
    }

});

window.LiveEditor = Backbone.View.extend({
    dom: {
        DRAW_CANVAS: ".scratchpad-draw-canvas",
        DRAW_COLOR_BUTTONS: "#draw-widgets a.draw-color-button",
        CANVAS_WRAP: ".scratchpad-canvas-wrap",
        EDITOR: ".scratchpad-editor",
        CANVAS_LOADING: ".scratchpad-canvas-loading",
        BIG_PLAY_LOADING: ".scratchpad-editor-bigplay-loading",
        BIG_PLAY_BUTTON: ".scratchpad-editor-bigplay-button",
        PLAYBAR: ".scratchpad-playbar",
        PLAYBAR_AREA: ".scratchpad-playbar-area",
        PLAYBAR_OPTIONS: ".scratchpad-playbar-options",
        PLAYBAR_LOADING: ".scratchpad-playbar .loading-msg",
        PLAYBAR_PROGRESS: ".scratchpad-playbar-progress",
        PLAYBAR_PLAY: ".scratchpad-playbar-play",
        PLAYBAR_TIMELEFT: ".scratchpad-playbar-timeleft",
        PLAYBAR_UI: ".scratchpad-playbar-play, .scratchpad-playbar-progress",
        OUTPUT_FRAME: "#output-frame",
        OUTPUT_DIV: "#output",
        ALL_OUTPUT: "#output, #output-frame",
        RESTART_BUTTON: "#restart-code",
        SCREENSHOT_BUTTON: "#capture-screenshot",
        OUTPUT_WINDOW_BUTTON: "#open-output-window",
        SAVE_BUTTON: "#save-program"
    },

    mouseCommands: ["move", "over", "out", "down", "up"],
    colors: ["black", "red", "orange", "green", "blue", "lightblue", "violet"],

    defaultOutputWidth: 400,
    defaultOutputHeight: 400,

    editors: {},

    initialize: function(options) {
        var self = this;

        // Channel API code
        if (goog && goog.appengine && typeof goog.appengine.Channel === "function") {
            var channel = new goog.appengine.Channel(token);
            this.socket = channel.open();
            this.socket.onopen = function () {
                console.log("socket: open");
            };
            this.socket.onopen = function () {
                console.log("socket: open");

                self.runCode(self.editor.text());
                self.outputState = "running";
            };
            this.socket.onmessage = function (e) {
                console.log("socket: message");

                self.handleData(JSON.parse(e.data));
            };
            this.socket.onerror = function () {
                console.log("socket: error");
            };
            this.socket.onclose = function () {
                console.log("socket: close");
            };

            this.sendChannelMessage = function(path, value) {
                var xhr = new XMLHttpRequest();   // new HttpRequest instance
                xhr.open("POST", path);
                xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                if (typeof value === "object") {
                    xhr.send(JSON.stringify(value));
                } else if (typeof value === "string") {
                    xhr.send(value);
                }
            };
        }

        // socket.io code
        if (typeof io === "function") {
            this.socket = io('/editor');
            this.socket.on('connect', function() {
                console.log("connected");
                self.runCode(self.editor.text());
                self.outputState = "running";
            });
            this.socket.on('message', function (data) {
                self.handleData(data);
            });
        }

        this.uniq = Math.floor(Math.random()*100);
        
        this.pid = options.pid;

        this.workersDir = this._qualifyURL(options.workersDir);
        this.externalsDir = this._qualifyURL(options.externalsDir);
        this.imagesDir = this._qualifyURL(options.imagesDir);
        this.execFile = this._qualifyURL(options.execFile);
        this.jshintFile = this._qualifyURL(options.jshintFile ||
            this.externalsDir + "jshint/jshint.js");

        this.outputType = options.outputType || "";
        this.editorType = options.editorType || _.keys(this.editors)[0];
        this.editorHeight = options.editorHeight;
        this.initialCode = options.code;
        this.initialVersion = options.version;
        this.settings = options.settings;
        this.validation = options.validation;

        this.recordingCommands = options.recordingCommands;
        this.recordingMP3 = options.recordingMP3;
        this.recordingInit = options.recordingInit || {
            code: this.initialCode,
            version: this.initialVersion
        };

        this.transloaditTemplate = options.transloaditTemplate;
        this.transloaditAuthKey = options.transloaditAuthKey;

        this.outputState = "dirty";
        this.editorState = "clean";

        this.render();

        this.config = new ScratchpadConfig({
            version: options.version
        });

        this.record = new ScratchpadRecord();

        // Set up the Canvas drawing area
        this.drawCanvas = new ScratchpadDrawCanvas({
            el: this.dom.DRAW_CANVAS,
            record: this.record
        });

        this.drawCanvas.on({
            // Drawing has started
            drawStarted: function() {
                // Activate the canvas
                this.$el.find(this.dom.DRAW_CANVAS).show();
            }.bind(this),

            // Drawing has ended
            drawEnded: function() {
                // Hide the canvas
                this.$el.find(this.dom.DRAW_CANVAS).hide();
            }.bind(this),

            // A color has been chosen
            colorSet: function(color) {
                // Deactivate all the color buttons
                this.$el.find(this.dom.DRAW_COLOR_BUTTONS)
                    .removeClass("ui-state-active");

                // If a new color has actually been chosen
                if (color !== null) {
                    // Select that color and activate the button
                    this.$el.find("#" + color).addClass("ui-state-active");
                }
            }.bind(this)
        });

        // Set up the editor
        this.editor = new this.editors[this.editorType]({
            el: this.dom.EDITOR,
            code: this.initialCode,
            autoFocus: options.autoFocus,
            config: this.config,
            record: this.record,
            imagesDir: this.imagesDir,
            externalsDir: this.externalsDir,
            workersDir: this.workersDir,
            type: this.editorType,
            pid: this.pid
        });

        this.tipbar = new TipBar({
            el: this.$(this.dom.OUTPUT_DIV),
            liveEditor: this
        });

        var code = options.code;

        // Load the text into the editor
        if (code !== undefined) {
            this.editor.text(code);
            this.editor.originalCode = code;
        }

        // Focus on the editor
        this.editor.focus();

        if (options.cursor) {
            // Restore the cursor position
            this.editor.setCursor(options.cursor);

        } else {
            // Set an initial starting selection point
            this.editor.setSelection({
                start: {row: 0, column: 0},
                end: {row: 0, column: 0}
            });
        }

        // Hide the overlay
        this.$el.find("#page-overlay").hide();

        // Change the width and height of the output frame if it's been
        // changed by the user, via the query string, or in the settings
        this.updateCanvasSize(options.width, options.height);

        if (this.canRecord()) {
            this.$el.find("#record").show();
        }

        this.bind();
        this.setupAudio();
    },

    render: function() {
        this.$el.html(Handlebars.templates["live-editor"]({
//            execFile: this.execFile,
            imagesDir: this.imagesDir,
            colors: this.colors,
            allowSave: allowSave,
            allowScreenshot: allowScreenshot
        }));
    },

    bind: function() {
        var self = this;
        var $el = this.$el;
        var dom = this.dom;

        // Make sure that disabled buttons can't still be used
        $el.delegate(".simple-button.disabled, .ui-state-disabled", "click", function(e) {
            e.stopImmediatePropagation();
            return false;
        });

        // Handle the restart button
        $el.delegate(self.dom.RESTART_BUTTON, "click",
            this.restartCode.bind(this));
        
        $el.delegate(self.dom.SCREENSHOT_BUTTON, "click", 
            this.getScreenshot.bind(this));
        
        $el.delegate(self.dom.OUTPUT_WINDOW_BUTTON, "click",
            this.openOutputWindow.bind(this));
        
        $el.delegate(self.dom.SAVE_BUTTON, "click", 
            this.saveProgram.bind(this));

        $(window).on("beforeunload", function (e) {
            if (self.editorState === "dirty") {
                var message = "You've edited your program.  Your changes will be lost if you don't save them";

                (e || window.event).returnValue = message; //Gecko + IE
                return message; //Gecko + Webkit, Safari, Chrome etc.
            }
        });

        this.handleMessagesBound = this.handleMessages.bind(this);
        $(window).on("message", this.handleMessagesBound);

        // When the frame loads, execute the code
        // We don't use markDirty here, because we know
        // that nothing could have succeeded before load
        $el.find("#output-frame").on("load", function() {
            this.runCode(this.editor.text());
            this.outputState = "running";
        }.bind(this));

        // Whenever the user changes code, execute the code
        this.editor.on("change", function() {
            // They're typing. Hide the tipbar to give them a chance to fix things up
            this.tipbar.hide();
            this.markDirty();
            this.editorState = "dirty";
        }.bind(this));

        this.config.on("versionSwitched", function(e, version) {
            // Re-run the code after a version switch
            this.markDirty();

            // Run the JSHint config
            this.config.runVersion(version, "jshint");
        }.bind(this));

        if (this.hasAudio()) {
            $el.find(".overlay").show();
            $el.find(dom.BIG_PLAY_LOADING).show();
            $el.find(dom.PLAYBAR).show();
        }

        // Set up color button handling
        $el.find(dom.DRAW_COLOR_BUTTONS).each(function() {
            $(this).addClass("ui-button")
                .children().css("background", this.id);
        });

        // Set up toolbar buttons
        if (jQuery.fn.buttonize) {
            $el.buttonize();
        }

        // Handle color button clicks during recording
        $el.on("buttonClick", "a.draw-color-button", function() {
            self.drawCanvas.setColor(this.id);
            self.editor.focus();
        });

        // If the user clicks the disable overlay (which is laid over
        // the editor and canvas on playback) then pause playback.
        $el.on("click", ".disable-overlay", function() {
            self.record.pausePlayback();
        });

        // Set up the playback progress bar
        $el.find(dom.PLAYBAR_PROGRESS).slider({
            range: "min",
            value: 0,
            min: 0,
            max: 100,

            // Bind events to the progress playback bar
            // When a user has started dragging the slider
            start: function() {
                // Prevent slider manipulation while recording
                if (self.record.recording) {
                    return false;
                }

                self.record.seeking = true;

                // Pause playback and remember if we were playing or were paused
                self.wasPlaying = self.record.playing;
                self.record.pausePlayback();
            },

            // While the user is dragging the slider
            slide: function(e, ui) {
                // Slider position is set in seconds
                var sliderPos = ui.value * 1000;

                // Seek the player and update the time indicator
                // Ignore values that match endTime - sometimes the
                // slider jumps and we should ignore those jumps
                // It's ok because endTime is still captured on 'change'
                if (sliderPos !== self.record.endTime()) {
                    self.updateTimeLeft(sliderPos);
                    self.seekTo(sliderPos);
                }
            },

            // When the sliding has stopped
            stop: function(e, ui) {
                self.record.seeking = false;
                self.updateTimeLeft(ui.value * 1000);

                // If we were playing when we started sliding, resume playing
                if (self.wasPlaying) {
                    // Set the timeout to give time for the events to catch up
                    // to the present -- if we start before the events have
                    // finished, the scratchpad editor code will be in a bad
                    // state. Wait roughly a second for events to settle down.
                    setTimeout(function() {
                        self.record.play();
                    }, 1000);
                }
            }
        });

        var handlePlayClick = function() {
            if (self.record.playing) {
                self.record.pausePlayback();
            } else {
                self.record.play();
            }
        };

        // Handle the play button
        $el.find(dom.PLAYBAR_PLAY)
            .off("click.play-button")
            .on("click.play-button", handlePlayClick);

        var handlePlayButton = function() {
            // Show the playback bar and hide the loading message
            $el.find(dom.PLAYBAR_LOADING).hide();
            $el.find(dom.PLAYBAR_AREA).show();

            // Handle the big play button click event
            $el.find(dom.BIG_PLAY_BUTTON)
                .off("click.big-play-button")
                .on("click.big-play-button", function() {
                $el.find(dom.BIG_PLAY_BUTTON).hide();
                handlePlayClick();
            });

            $el.find(dom.PLAYBAR_PLAY).on("click", function() {
                $el.find(dom.BIG_PLAY_BUTTON).hide();
            });

            // Hide upon interaction with the editor
            $el.find(dom.EDITOR).on("click", function() {
                $el.find(dom.BIG_PLAY_BUTTON).hide();
            });

            // Switch from loading to play
            $el.find(dom.BIG_PLAY_LOADING).hide();
            $el.find(dom.BIG_PLAY_BUTTON).show();

            self.off("readyToPlay", handlePlayButton);
        };

        // Set up all the big play button interactions
        this.on("readyToPlay", handlePlayButton);

        // Handle the clear button click during recording
        $el.on("buttonClick", "#draw-clear-button", function() {
            self.drawCanvas.clear();
            self.drawCanvas.endDraw();
            self.editor.focus();
        });

        // Handle the restart button
        $el.on("click", "#restart-code", function() {
            self.record.log("restart");
        });

        // Bind the handler to start a new recording
        $el.find("#record").on("click", function() {
            self.recordHandler(function(err) {
                if (err) {
                    // TODO: Change this:
                    console.error(err);
                }
            });
        });

        // Load the recording playback commands as well, if applicable
        if (this.recordingCommands) {
            this.record.loadRecording({
                init: this.recordingInit,
                commands: this.recordingCommands
            });
        }
    },

    remove: function() {
        $(window).off("message", this.handleMessagesBound);
        this.editor.remove();
    },

    canRecord: function() {
        return this.transloaditAuthKey && this.transloaditTemplate;
    },

    hasAudio: function() {
        return !!this.recordingMP3;
    },

    setupAudio: function() {
        if (!this.hasAudio()) {
            return;
        }

        var self = this;
        var rebootTimer;

        soundManager.setup({
            url: this.externalsDir + "SoundManager2/swf/",
            debugMode: false,
            // Un-comment this to test Flash on FF:
            // debugFlash: true, preferFlash: true, useHTML5Audio: false,
            // See sm2-container in play-page.handlebars and flashblock.css
            useFlashBlock: true,
            // Sometimes when Flash is blocked or the browser is slower,
            //  soundManager will fail to initialize at first,
            //  claiming no response from the Flash file.
            // To handle that, we attempt a reboot 3 seconds after each
            //  timeout, clearing the timer if we get an onready during
            //  that time (which happens if user un-blocks flash).
            onready: function() {
                window.clearTimeout(rebootTimer);
                self.audioInit();
            },
            ontimeout: function(error) {
                // The onready event comes pretty soon after the user
                //  clicks the flashblock, but not instantaneous, so 3
                //  seconds seems a good amount of time to give them the
                //  chance to click it before we remove it. It's possible
                //  they may have to click twice sometimes
                //  (but the second time time will work).
                window.clearTimeout(rebootTimer);
                rebootTimer = window.setTimeout(function() {
                    // Clear flashblocker divs
                    self.$el.find("#sm2-container div").remove();
                    soundManager.reboot();
                }, 3000);
            }
        });
        soundManager.beginDelayedInit();

        this.bindRecordHandlers();
    },

    audioInit: function() {
        if (!this.hasAudio()) {
            return;
        }

        var self = this;
        var record = this.record;

        // Reset the wasPlaying tracker
        this.wasPlaying = undefined;

        // Start the play head at 0
        record.time = 0;

        this.player = soundManager.createSound({
            // SoundManager errors if no ID is passed in,
            // even though we don't use it
            // The ID should be a string starting with a letter.
            id: "sound" + (new Date()).getTime(),

            url: this.recordingMP3,

            // Load the audio automatically
            autoLoad: true,

            // While the audio is playing update the position on the progress
            // bar and update the time indicator
            whileplaying: function() {
                self.updateTimeLeft(record.currentTime());

                if (!record.seeking) {
                    // Slider takes values in seconds
                    self.$el.find(self.dom.PLAYBAR_PROGRESS)
                        .slider("option", "value", record.currentTime() / 1000);
                }

                record.trigger("playUpdate");
            }.bind(this),

            // Hook audio playback into Record command playback
            // Define callbacks rather than sending the function directly so
            // that the scope in the Record methods is correct.
            onplay: function() {
                record.play();
            },
            onresume: function() {
                record.play();
            },
            onpause: function() {
                record.pausePlayback();
            },
            onload: function() {
                record.durationEstimate = record.duration = this.duration;
                record.trigger("loaded");
            },
            whileloading: function() {
                record.duration = null;
                record.durationEstimate = this.durationEstimate;
                record.trigger("loading");
            },
            // When audio playback is complete, notify everyone listening
            // that playback is officially done
            onfinish: function() {
                record.stopPlayback();
                record.trigger("playEnded");
            },
            onsuspend: function() {
                // Suspend happens when the audio can't be loaded automatically
                // (such is the case on iOS devices). Thus we trigger a
                // readyToPlay event anyway and let the load happen when the
                // user clicks the play button later on.
                self.trigger("readyToPlay");
            }
        });

        // Wait to start playback until we at least have some
        // bytes from the server (otherwise the player breaks)
        var checkStreaming = setInterval(function() {
            // We've loaded enough to start playing
            if (self.audioReadyToPlay()) {
                clearInterval(checkStreaming);
                self.trigger("readyToPlay");
            }
        }, 16);

        this.bindPlayerHandlers();
    },

    audioReadyToPlay: function() {
        return this.player && this.player.bytesLoaded > 0;
    },

    bindPlayerHandlers: function() {
        var self = this;
        var record = this.record;

        // Bind events to the Record object, to track when playback events occur
        this.record.bind({
            loading: function() {
                self.updateDurationDisplay();
            },

            loaded: function() {
                // Add an empty command to force the Record playback to
                // keep playing until the audio track finishes playing
                var commands = record.commands;

                if (commands) {
                    commands.push([
                        Math.max(record.endTime(),
                            commands[commands.length - 1][0]), "seek"]);
                }
                self.updateDurationDisplay();
            },

            // When play has started
            playStarted: function() {
                // If the audio player is paused, resume playing
                if (self.player.paused) {
                    self.player.resume();

                // Otherwise we can assume that we need to start playing from the top
                } else if (self.player.playState === 0) {
                    self.player.play();
                }
            },

            // Pause when recording playback pauses
            playPaused: function() {
                self.player.pause();
            }
        });
    },

    bindRecordHandlers: function() {
        var self = this;
        var record = this.record;

        /*
         * Bind events to Record (for recording and playback)
         * and to ScratchpadCanvas (for recording and playback)
         */

        record.bind({
            // Playback of a recording has begun
            playStarted: function(e, resume) {
                // Re-init if the recording version is different from
                // the scratchpad's normal version
                self.config.switchVersion(record.getVersion());

                // We're starting over so reset the editor and
                // canvas to its initial state
                if (!record.recording && !resume) {
                    // Reset the editor
                    self.editor.reset(record.initData.code, false);

                    // Clear and hide the drawing area
                    self.drawCanvas.clear(true);
                    self.drawCanvas.endDraw();
                }

                if (!record.recording) {
                    // Disable the record button during playback
                    self.$el.find("#record").addClass("disabled");
                }

                // During playback disable the restart button
                self.$el.find("#restart-code").addClass("disabled");

                if (!record.recording) {
                    // Turn on playback-related styling
                    $("html").addClass("playing");

                    // Show an invisible overlay that blocks interactions with
                    // the editor and canvas areas (preventing the user from
                    // being able to disturb playback)
                    self.$el.find(".disable-overlay").show();
                }

                self.editor.unfold();

                // Activate the play button
                self.$el.find(self.dom.PLAYBAR_PLAY)
                    .find("span")
                    .removeClass("glyphicon-play icon-play")
                    .addClass("glyphicon-pause icon-pause");
            },

            playEnded: function() {
                // Re-init if the recording version is different from
                // the scratchpad's normal version
                self.config.switchVersion(this.initialVersion);
            },

            // Playback of a recording has been paused
            playPaused: function() {
                // Turn off playback-related styling
                $("html").removeClass("playing");

                // Disable the blocking overlay
                self.$el.find(".disable-overlay").hide();

                // Allow the user to restart the code again
                self.$el.find("#restart-code").removeClass("disabled");

                // Re-enable the record button after playback
                self.$el.find("#record").removeClass("disabled");

                // Deactivate the play button
                self.$el.find(self.dom.PLAYBAR_PLAY)
                    .find("span")
                    .addClass("glyphicon-play icon-play")
                    .removeClass("glyphicon-pause icon-pause");
            },

            // Recording has begun
            recordStarted: function() {
                // Let the output know that recording has begun
                self.postFrame({ recording: true });

                self.$el.find("#draw-widgets").removeClass("hidden").show();

                // Hides the invisible overlay that blocks interactions with the
                // editor and canvas areas (preventing the user from being able
                // to disturb the recording)
                self.$el.find(".disable-overlay").hide();

                // Allow the editor to be changed
                self.editor.setReadOnly(false);

                // Turn off playback-related styling
                // (hides hot numbers, for example)
                $("html").removeClass("playing");

                // Reset the canvas to its initial state only if this is the
                // very first chunk we are recording.
                if (record.hasNoChunks()) {
                    self.drawCanvas.clear(true);
                    self.drawCanvas.endDraw();
                }

                // Disable the save button
                self.$el.find("#save-button, #fork-button")
                    .addClass("disabled");

                // Activate the recording button
                self.$el.find("#record").addClass("toggled");
            },

            // Recording has ended
            recordEnded: function() {
                // Let the output know that recording has ended
                self.postFrame({ recording: false });

                if (record.recordingAudio) {
                    self.recordView.stopRecordingAudio();
                }

                // Re-enable the save button
                self.$el.find("#save-button, #fork-button")
                    .removeClass("disabled");

                // Enable playbar UI
                self.$el.find(self.dom.PLAYBAR_UI)
                    .removeClass("ui-state-disabled");

                // Return the recording button to normal
                self.$el.find("#record").removeClass("toggled disabled");

                // Stop any sort of user playback
                record.stopPlayback();

                // Show an invisible overlay that blocks interactions with the
                // editor and canvas areas (preventing the user from being able
                // to disturb the recording)
                self.$el.find(".disable-overlay").show();

                // Turn on playback-related styling (hides hot numbers, for
                // example)
                $("html").addClass("playing");

                // Prevent the editor from being changed
                self.editor.setReadOnly(true);

                self.$el.find("#draw-widgets").addClass("hidden").hide();

                // Because we are recording in chunks, do not reset the canvas
                // to its initial state.
                self.drawCanvas.endDraw();
            }
        });

        // ScratchpadCanvas mouse events to track
        // Tracking: mousemove, mouseover, mouseout, mousedown, and mouseup
        _.each(this.mouseCommands, function(name) {
            // Handle the command during playback
            record.handlers[name] = function(x, y) {
                self.postFrame({
                    mouseAction: {
                        name: name,
                        x: x,
                        y: y
                    }
                });
            };
        });

        // When a restart occurs during playback, restart the output
        record.handlers.restart = function() {
            var $restart = self.$el.find("#restart-code");

            if (!$restart.hasClass("hilite")) {
                $restart.addClass("hilite green");
                setTimeout(function() {
                    $restart.removeClass("hilite green");
                }, 300);
            }

            self.postFrame({restart: true});
        };

        // Force the recording to sync to the current time of the audio playback
        record.currentTime = function() {
            return self.player ?
                self.player.position : 0;
        };

        // Create a function for retreiving the track end time
        // Note that duration will be set to the duration estimate while
        // the track is still loading, and only set to actual duration
        // once its loaded.
        record.endTime = function() {
            return this.duration || this.durationEstimate;
        };
    },

    recordHandler: function(callback) {
        // If we're already recording, stop
        if (this.record.recording) {
            // Note: We should never hit this case when recording chunks.
            this.recordView.stopRecordingCommands();
            return;
        }

        var saveCode = this.editor.text();

        // You must have some code in the editor before you start recording
        // otherwise the student will be starting with a blank editor,
        // which is confusing
        if (!saveCode) {
            callback({error: "empty"});

        } else if (this.config.curVersion() !== this.config.latestVersion()) {
            callback({error: "outdated"});

        } else if (this.canRecord() && !this.hasAudio()) {
            this.startRecording();
            this.editor.focus();

        } else {
            callback({error: "exists"});
        }
    },

    startRecording: function() {
        this.bindRecordHandlers();

        if (!this.recordView) {
            var $el = this.$el;

            // NOTE(jeresig): Unfortunately we need to do this to make sure
            // that we load the web worker from the same domain as the rest
            // of the site (instead of the domain that the "exec" page is on).
            // This is dumb and a KA-specific bit of functionality that we
            // should change, somehow.
            var workersDir = this.workersDir.replace(/^https?:\/\/[^\/]*/, "");

            this.recordView = new ScratchpadRecordView({
                el: $el.find(".scratchpad-dev-record-row"),
                recordButton: $el.find("#record"),
                saveButton: $el.find("#save-button"),
                record: this.record,
                editor: this.editor,
                config: this.config,
                workersDir: workersDir,
                drawCanvas: this.drawCanvas,
                transloaditTemplate: this.transloaditTemplate,
                transloaditAuthKey: this.transloaditAuthKey
            });
        }

        this.recordView.initializeRecordingAudio();
    },

    saveRecording: function(callback) {
        // If no command or audio recording was made, just save the results
        if (!this.record.recorded || !this.record.recordingAudio) {
            return callback();
        }

        var transloadit = new TransloaditXhr({
            authKey: this.transloaditAuthKey,
            templateId: this.transloaditTemplate,
            successCb: function(results) {
                this.recordingMP3 =
                    results.mp3[0].url.replace(/^http:/, "https:");
                callback(null, this.recordingMP3);
            }.bind(this),
            errorCb: callback
        });

        this.recordView.getFinalAudioRecording(function(combined) {
            transloadit.uploadFile(combined.wav);
        });
    },

    // We call this function multiple times, because the
    // endTime value may change as we load the file
    updateDurationDisplay: function() {
        // Do things that are dependent on knowing duration

        // This gets called if we're loading while we're playing,
        // so we need to update with the current time
        this.updateTimeLeft(this.record.currentTime());

        // Set the duration of the progress bar based upon the track duration
        // Slider position is set in seconds
        this.$el.find(this.dom.PLAYBAR_PROGRESS).slider("option", "max",
            this.record.endTime() / 1000);
    },

    // Update the time left in playback of the track
    updateTimeLeft: function(time) {
        // Update the time indicator with a nicely formatted time
        this.$el.find(".scratchpad-playbar-timeleft").text(
            "-" + this.formatTime(this.record.endTime() - time));
    },

    // Utility method for formatting time in minutes/seconds
    formatTime: function(time) {
        var seconds = time / 1000,
            min = Math.floor(seconds / 60),
            sec = Math.floor(seconds % 60);

        if (min < 0 || sec < 0) {
            min = 0;
            sec = 0;
        }

        return min + ":" + (sec < 10 ? "0" : "") + sec;
    },

    // Seek the player to a particular time
    seekTo: function(timeMS) {
        // Don't update the slider position when seeking
        // (since this triggers an event on the #progress element)
        if (!this.record.seeking) {
            this.$el.find(this.dom.PLAYBAR_PROGRESS)
                .slider("option", "value", timeMS / 1000);
        }

        // Move the recording and player positions
        if (this.record.seekTo(timeMS) !== false) {
            this.player.setPosition(timeMS);
        }
    },

    handleMessages: function(e) {
        var event = e.originalEvent;
        var data;

        try {
            data = JSON.parse(event.data);
        } catch (err) {
            // Malformed JSON, we don't care about it
        }

        if (!data) {
            return;
        }

        this.handleData(data);
    },

    handleData: function (data) {
        this.trigger("update", data);

        // Hide loading overlay
        if (data.loaded) {
            this.$el.find(this.dom.CANVAS_LOADING).hide();
        }

        // Set the code in the editor
        if (data.code !== undefined) {
            this.editor.text(data.code);
            this.editor.originalCode = data.code;
            this.restartCode();
        }

        // Testing/validation code is being set
        if (data.validate != null) {
            this.validation = data.validate;
        }

        if (data.results) {
            if (this.outputState === "running") {
                this.outputState = "clean";
            } else if (this.outputState === "dirty") {
                this.runCode(this.editor.text());
                this.outputState = "running";
            }
        }

        if (this.editorType.indexOf("ace_") === 0 && data.results &&
            data.results.assertions) {
            // Remove previously added markers
            var markers = this.editor.editor.session.getMarkers();
            _.each(markers, function(marker, markerId) {
                this.editor.editor.session.removeMarker(markerId);
            }.bind(this));

            var annotations = [];
            for (var i = 0; i < data.results.assertions.length; i++) {
                var unitTest = data.results.assertions[i];
                annotations.push({
                    row: unitTest.row,
                    column: unitTest.column,
                    text: unitTest.text,
                    type: "warning"
                });
                // Underline the problem line to make it more obvious
                //  if they don't notice the gutter icon
                var AceRange = ace.require("ace/range").Range;
                var line = this.editor.editor.session
                    .getDocument().getLine(unitTest.row);
                this.editor.editor.session.addMarker(
                    new AceRange(unitTest.row, 0, unitTest.row, line.length),
                    "ace_problem_line", "text", false);
            }

            this.editor.editor.session.setAnnotations(annotations);
        }

        if (data.results && _.isArray(data.results.errors)) {
            this.tipbar.toggleErrors(data.results.errors);
        }

        // Set the line visibility in the editor
        if (data.lines !== undefined) {
            this.editor.toggleGutter(data.lines);
        }

        // Restart the execution
        if (data.restart) {
            this.restartCode();
        }

        // Log the recorded action
        if (data.log) {
            this.record.log.apply(this.record, data.log);
        }
        
        if (data.screenshot) {
            var status = data.screenshot;
            var screenshotDialog = document.getElementById("screenshotDialog");
            if (screenshotDialog) {
                var msg;
                if (status === "success") {
                    msg = "Screenshot successfully saved";
                } else {
                    msg = "Screenshot could not be saved at the current time.  Try again later.";
                }
                screenshotDialog.querySelector("div.message").innerText = msg;
                screenshotDialog.showModal();
            }
        }
    },

    markDirty: function(){
        if (this.outputState === "clean") {
            this.runCode(this.editor.text());
            this.outputState = "running";
        } else {
            this.outputState = "dirty";
        }
    },

    // Extract the origin from the embedded frame location
    postFrameOrigin: function() {
        var match = /^.*:\/\/[^\/]*/.exec(
            this.$el.find("#output-frame").attr("data-src"));

        return match ?
            match[0] :
            window.location.protocol + "//" + window.location.host;
    },

    postFrame: function(data) {
        // Send the data to the frame using postMessage
        this.$el.find("#output-frame")[0].contentWindow.postMessage(
            JSON.stringify(data), this.postFrameOrigin());
    },

    /*
     * Restart the code in the output frame.
     */
    restartCode: function() {
        if (this.sendChannelMessage) {
            this.sendChannelMessage("/editor", { restart: true })
        } else if (typeof io === "function") {
            this.socket.emit('message', { restart: true });
        } else {
            this.postFrame({ restart: true });
        }
    },

    /*
     * Execute some code in the output frame.
     */
    runCode: function(code) {
        var options = {
            code: arguments.length === 0 ? this.editor.text() : code,
            validate: this.validation || "",
            version: this.config.curVersion(),
            settings: this.settings || {},
            workersDir: this.workersDir,
            externalsDir: this.externalsDir,
            imagesDir: this.imagesDir,
            jshintFile: this.jshintFile,
            outputType: this.outputType
        };

        this.trigger("runCode", options);

        if (this.sendChannelMessage) {
            console.log('sending code to server via Channel API');
            this.sendChannelMessage("/editor", options);
        } else if (typeof io === "function") {
            console.log('sending code to server via socket.i');
            this.socket.emit('message', options);
        } else {
            this.postFrame(options);
        }
    },

    getScreenshot: function() {
        // Unbind any handlers this function may have set for previous
        // screenshots
        //$(window).unbind("message.getScreenshot");
        //
        //// We're only expecting one screenshot back
        //$(window).bind("message.getScreenshot", function(e) {
        //    // Only call if the data is actually an image!
        //    if (/^data:/.test(e.originalEvent.data)) {
        //        callback(e.originalEvent.data);
        //    }
        //});

        // Ask the frame for a screenshot
        var request = { screenshot: true, pid: this.pid };
        if (this.sendChannelMessage) {
            this.sendChannelMessage("/editor", request)
        } else if (typeof io === "function") {
            this.socket.emit('message', request);
        } else {
            this.postFrame(request);
        }
    },

    openOutputWindow: function() {
        var left = screen.width - 600;
        var strWindowFeatures = "height=600,width=600,top=0,left=" + left;
        // TODO: provide a way to hide the logout link on output.html
        var URL = "/output";
        var win = window.open(URL, "_blank", strWindowFeatures);
        // TODO: close the window if we logout or close the main window
    },

    updateCanvasSize: function(width, height) {
        width = width || this.defaultOutputWidth;
        height = height || this.defaultOutputHeight;

        //this.$el.find(this.dom.CANVAS_WRAP).width(width);
        this.$el.find(this.dom.ALL_OUTPUT).height(height);

        // Set the editor height to be the same as the canvas height
        this.$el.find(this.dom.EDITOR).height(this.editorHeight || height);

        this.trigger("canvasSizeUpdated", {
            width: width,
            height: height
        });
    },
    
    saveProgram: function() {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/save", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function () {
            // TODO: display a dialog to the user with this info
            if (xhr.status === 200) {
                console.log("we're good to go");
                this.editorState = "clean"
            } else {
                console.log("something went wrong");
            }

            var saveDialog = document.getElementById("saveDialog");
            if (saveDialog) {
                var msg;
                if (xhr.status === 200) {
                    msg = "Sketch was successfully saved";
                } else {
                    msg = "Unable to save sketch";
                }
                saveDialog.querySelector("div.message").innerText = msg;
                saveDialog.showModal();
            }
        }.bind(this);

        var code = this.editor.text();
        var obj = { code: code, pid: this.pid };
        xhr.send(JSON.stringify(obj));
    },

    // don't need this duplicate
    //getScreenshot: function(callback) {
    //    // Unbind any handlers this function may have set for previous
    //    // screenshots
    //    $(window).off("message.getScreenshot");
    //
    //    // We're only expecting one screenshot back
    //    $(window).on("message.getScreenshot", function(e) {
    //        // Only call if the data is actually an image!
    //        if (/^data:/.test(e.originalEvent.data)) {
    //            callback(e.originalEvent.data);
    //        }
    //    });
    //
    //    // Ask the frame for a screenshot
    //    this.postFrame({ screenshot: true });
    //},

    undo: function() {
        this.editor.undo();
    },

    _qualifyURL: function(url){
        var a = document.createElement("a");
        a.href = url;
        return a.href.replace("http://localhost:8000", "");
    }
});

LiveEditor.registerEditor = function(name, editor) {
    LiveEditor.prototype.editors[name] = editor;
};
