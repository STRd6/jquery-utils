(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "version": "0.1.1",
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "jquery-utils\n============\n",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "mode": "100644",
      "content": "    require \"hotkeys\"\n    require \"image-reader\"\n    require \"./take_class\"\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "version: \"0.1.1\"\nremoteDependencies: [\n  \"//code.jquery.com/jquery-1.10.1.min.js\"\n  \"http://strd6.github.io/tempest/javascripts/envweb.js\"\n  \"http://strd6.github.io/require/v0.2.2.js\"\n]\ndependencies:\n  hotkeys: \"STRd6/jquery.hotkeys:v0.9.0\"\n  \"image-reader\": \"STRd6/jquery-image_reader:v0.1.3\"\n",
      "type": "blob"
    },
    "take_class.coffee.md": {
      "path": "take_class.coffee.md",
      "mode": "100644",
      "content": "Take Class\n==========\n\nTake the named class from all the sibling elements. Perfect for something like\nradio buttons.\n\n    (($) ->\n      $.fn.takeClass = (name) ->\n        @addClass(name).siblings().removeClass(name)\n\n        return this\n    )(jQuery)\n",
      "type": "blob"
    },
    "test/take_class.coffee": {
      "path": "test/take_class.coffee",
      "mode": "100644",
      "content": "require \"../main\"\n\ndescribe \"jQuery#takeClass\", ->\n  it \"should exist\", ->\n    assert $.fn.takeClass\n",
      "type": "blob"
    },
    "test/image_reader.coffee": {
      "path": "test/image_reader.coffee",
      "mode": "100644",
      "content": "require \"../main\"\n\ndescribe \"jQuery#pasteImageReader\", ->\n  it \"should exist\", ->\n    assert $.fn.pasteImageReader\n\ndescribe \"jQuery#dropImageReader\", ->\n  it \"should exist\", ->\n    assert $.fn.dropImageReader\n",
      "type": "blob"
    }
  },
  "distribution": {
    "main": {
      "path": "main",
      "content": "(function() {\n  require(\"hotkeys\");\n\n  require(\"image-reader\");\n\n  require(\"./take_class\");\n\n}).call(this);\n\n//# sourceURL=main.coffee",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.1.1\",\"remoteDependencies\":[\"//code.jquery.com/jquery-1.10.1.min.js\",\"http://strd6.github.io/tempest/javascripts/envweb.js\",\"http://strd6.github.io/require/v0.2.2.js\"],\"dependencies\":{\"hotkeys\":\"STRd6/jquery.hotkeys:v0.9.0\",\"image-reader\":\"STRd6/jquery-image_reader:v0.1.3\"}};",
      "type": "blob"
    },
    "take_class": {
      "path": "take_class",
      "content": "(function() {\n  (function($) {\n    return $.fn.takeClass = function(name) {\n      this.addClass(name).siblings().removeClass(name);\n      return this;\n    };\n  })(jQuery);\n\n}).call(this);\n\n//# sourceURL=take_class.coffee",
      "type": "blob"
    },
    "test/take_class": {
      "path": "test/take_class",
      "content": "(function() {\n  require(\"../main\");\n\n  describe(\"jQuery#takeClass\", function() {\n    return it(\"should exist\", function() {\n      return assert($.fn.takeClass);\n    });\n  });\n\n}).call(this);\n\n//# sourceURL=test/take_class.coffee",
      "type": "blob"
    },
    "test/image_reader": {
      "path": "test/image_reader",
      "content": "(function() {\n  require(\"../main\");\n\n  describe(\"jQuery#pasteImageReader\", function() {\n    return it(\"should exist\", function() {\n      return assert($.fn.pasteImageReader);\n    });\n  });\n\n  describe(\"jQuery#dropImageReader\", function() {\n    return it(\"should exist\", function() {\n      return assert($.fn.dropImageReader);\n    });\n  });\n\n}).call(this);\n\n//# sourceURL=test/image_reader.coffee",
      "type": "blob"
    }
  },
  "entryPoint": "main",
  "dependencies": {
    "hotkeys": {
      "version": "0.9.0",
      "source": {
        "LICENSE": {
          "path": "LICENSE",
          "mode": "100644",
          "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
          "type": "blob"
        },
        "README.md": {
          "path": "README.md",
          "mode": "100644",
          "content": "jquery.hotkeys\n==============\n\njQuery hotkeys plugin\n",
          "type": "blob"
        },
        "hotkeys.coffee.md": {
          "path": "hotkeys.coffee.md",
          "mode": "100644",
          "content": "jQuery Hotkeys Plugin\n=====================\n\nCopyright 2010, John Resig\nDual licensed under the MIT or GPL Version 2 licenses.\n\nBased upon the plugin by Tzury Bar Yochay:\nhttp://github.com/tzuryby/hotkeys\n\nOriginal idea by:\nBinny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/\n\n    if jQuery? \n      ((jQuery) ->\n        isTextAcceptingInput = (element) ->\n          /textarea|select/i.test(element.nodeName) or element.type is \"text\" or element.type is \"password\"\n\n        isFunctionKey = (event) ->\n          (event.type != \"keypress\") && (112 <= event.which <= 123)\n\n        jQuery.hotkeys =\n          version: \"0.9.0\"\n\n          specialKeys:\n            8: \"backspace\"\n            9: \"tab\"\n            13: \"return\"\n            16: \"shift\"\n            17: \"ctrl\"\n            18: \"alt\"\n            19: \"pause\"\n            20: \"capslock\"\n            27: \"esc\"\n            32: \"space\"\n            33: \"pageup\"\n            34: \"pagedown\"\n            35: \"end\"\n            36: \"home\"\n            37: \"left\"\n            38: \"up\"\n            39: \"right\"\n            40: \"down\"\n            45: \"insert\"\n            46: \"del\"\n            96: \"0\"\n            97: \"1\"\n            98: \"2\"\n            99: \"3\"\n            100: \"4\"\n            101: \"5\"\n            102: \"6\"\n            103: \"7\"\n            104: \"8\"\n            105: \"9\"\n            106: \"*\"\n            107: \"+\"\n            109: \"-\"\n            110: \".\"\n            111 : \"/\"\n            112: \"f1\"\n            113: \"f2\"\n            114: \"f3\"\n            115: \"f4\"\n            116: \"f5\"\n            117: \"f6\"\n            118: \"f7\"\n            119: \"f8\"\n            120: \"f9\"\n            121: \"f10\"\n            122: \"f11\"\n            123: \"f12\"\n            144: \"numlock\"\n            145: \"scroll\"\n            186: \";\"\n            187: \"=\"\n            188: \",\"\n            189: \"-\"\n            190: \".\"\n            191: \"/\"\n            219: \"[\"\n            220: \"\\\\\"\n            221: \"]\"\n            222: \"'\"\n            224: \"meta\"\n\n          shiftNums:\n            \"`\": \"~\"\n            \"1\": \"!\"\n            \"2\": \"@\"\n            \"3\": \"#\"\n            \"4\": \"$\"\n            \"5\": \"%\"\n            \"6\": \"^\"\n            \"7\": \"&\"\n            \"8\": \"*\"\n            \"9\": \"(\"\n            \"0\": \")\"\n            \"-\": \"_\"\n            \"=\": \"+\"\n            \";\": \":\"\n            \"'\": \"\\\"\"\n            \",\": \"<\"\n            \".\": \">\"\n            \"/\": \"?\"\n            \"\\\\\": \"|\"\n\n        keyHandler = (handleObj) ->\n          # Only care when a possible input has been specified\n          if typeof handleObj.data != \"string\"\n            return\n\n          origHandler = handleObj.handler\n          keys = handleObj.data.toLowerCase().split(\" \")\n\n          handleObj.handler = (event) ->          \n            # Keypress represents characters, not special keys\n            special = event.type != \"keypress\" && jQuery.hotkeys.specialKeys[ event.which ]\n            character = String.fromCharCode( event.which ).toLowerCase()\n            modif = \"\"\n            possible = {}\n            target = event.target\n\n            # check combinations (alt|ctrl|shift+anything)\n            if event.altKey && special != \"alt\"\n              modif += \"alt+\"\n\n            if event.ctrlKey && special != \"ctrl\"\n              modif += \"ctrl+\"\n\n            # TODO: Need to make sure this works consistently across platforms\n            if event.metaKey && !event.ctrlKey && special != \"meta\"\n              modif += \"meta+\"\n\n            # Don't fire in text-accepting inputs that we didn't directly bind to\n            # unless a non-shift modifier key or function key is pressed\n            unless this == target\n              if isTextAcceptingInput(target) && !modif && !isFunctionKey(event)\n                return\n\n            if event.shiftKey && special != \"shift\"\n              modif += \"shift+\"\n\n            if special\n              possible[ modif + special ] = true\n            else\n              possible[ modif + character ] = true\n              possible[ modif + jQuery.hotkeys.shiftNums[ character ] ] = true\n      \n              # \"$\" can be triggered as \"Shift+4\" or \"Shift+$\" or just \"$\"\n              if modif == \"shift+\"\n                possible[ jQuery.hotkeys.shiftNums[ character ] ] = true\n\n            for key in keys\n              if possible[key]\n                return origHandler.apply( this, arguments )\n\n        jQuery.each [ \"keydown\", \"keyup\", \"keypress\" ], ->\n          jQuery.event.special[ this ] = { add: keyHandler }\n\n      )(jQuery)\n    else\n      console.warn \"jQuery not found, no hotkeys added :(\"\n",
          "type": "blob"
        },
        "pixie.cson": {
          "path": "pixie.cson",
          "mode": "100644",
          "content": "version: \"0.9.0\"\nentryPoint: \"hotkeys\"\nremoteDependencies: [\n  \"//code.jquery.com/jquery-1.10.1.min.js\"\n  \"http://strd6.github.io/tempest/javascripts/envweb.js\"\n  \"http://strd6.github.io/require/v0.1.0.js\"\n]\n",
          "type": "blob"
        },
        "test/hotkeys.coffee": {
          "path": "test/hotkeys.coffee",
          "mode": "100644",
          "content": "require \"../hotkeys\"\n\ndescribe \"hotkeys binding\", ->\n  it \"should bind a hotkey\", (done) ->\n    $(document).bind \"keydown\", \"a\", ->\n      done()\n\n    $(document).trigger $.Event \"keydown\",\n      which: 65 # a\n      keyCode: 65\n",
          "type": "blob"
        }
      },
      "distribution": {
        "hotkeys": {
          "path": "hotkeys",
          "content": "(function() {\n  if (typeof jQuery !== \"undefined\" && jQuery !== null) {\n    (function(jQuery) {\n      var isFunctionKey, isTextAcceptingInput, keyHandler;\n      isTextAcceptingInput = function(element) {\n        return /textarea|select/i.test(element.nodeName) || element.type === \"text\" || element.type === \"password\";\n      };\n      isFunctionKey = function(event) {\n        var _ref;\n        return (event.type !== \"keypress\") && ((112 <= (_ref = event.which) && _ref <= 123));\n      };\n      jQuery.hotkeys = {\n        version: \"0.9.0\",\n        specialKeys: {\n          8: \"backspace\",\n          9: \"tab\",\n          13: \"return\",\n          16: \"shift\",\n          17: \"ctrl\",\n          18: \"alt\",\n          19: \"pause\",\n          20: \"capslock\",\n          27: \"esc\",\n          32: \"space\",\n          33: \"pageup\",\n          34: \"pagedown\",\n          35: \"end\",\n          36: \"home\",\n          37: \"left\",\n          38: \"up\",\n          39: \"right\",\n          40: \"down\",\n          45: \"insert\",\n          46: \"del\",\n          96: \"0\",\n          97: \"1\",\n          98: \"2\",\n          99: \"3\",\n          100: \"4\",\n          101: \"5\",\n          102: \"6\",\n          103: \"7\",\n          104: \"8\",\n          105: \"9\",\n          106: \"*\",\n          107: \"+\",\n          109: \"-\",\n          110: \".\",\n          111: \"/\",\n          112: \"f1\",\n          113: \"f2\",\n          114: \"f3\",\n          115: \"f4\",\n          116: \"f5\",\n          117: \"f6\",\n          118: \"f7\",\n          119: \"f8\",\n          120: \"f9\",\n          121: \"f10\",\n          122: \"f11\",\n          123: \"f12\",\n          144: \"numlock\",\n          145: \"scroll\",\n          186: \";\",\n          187: \"=\",\n          188: \",\",\n          189: \"-\",\n          190: \".\",\n          191: \"/\",\n          219: \"[\",\n          220: \"\\\\\",\n          221: \"]\",\n          222: \"'\",\n          224: \"meta\"\n        },\n        shiftNums: {\n          \"`\": \"~\",\n          \"1\": \"!\",\n          \"2\": \"@\",\n          \"3\": \"#\",\n          \"4\": \"$\",\n          \"5\": \"%\",\n          \"6\": \"^\",\n          \"7\": \"&\",\n          \"8\": \"*\",\n          \"9\": \"(\",\n          \"0\": \")\",\n          \"-\": \"_\",\n          \"=\": \"+\",\n          \";\": \":\",\n          \"'\": \"\\\"\",\n          \",\": \"<\",\n          \".\": \">\",\n          \"/\": \"?\",\n          \"\\\\\": \"|\"\n        }\n      };\n      keyHandler = function(handleObj) {\n        var keys, origHandler;\n        if (typeof handleObj.data !== \"string\") {\n          return;\n        }\n        origHandler = handleObj.handler;\n        keys = handleObj.data.toLowerCase().split(\" \");\n        return handleObj.handler = function(event) {\n          var character, key, modif, possible, special, target, _i, _len;\n          special = event.type !== \"keypress\" && jQuery.hotkeys.specialKeys[event.which];\n          character = String.fromCharCode(event.which).toLowerCase();\n          modif = \"\";\n          possible = {};\n          target = event.target;\n          if (event.altKey && special !== \"alt\") {\n            modif += \"alt+\";\n          }\n          if (event.ctrlKey && special !== \"ctrl\") {\n            modif += \"ctrl+\";\n          }\n          if (event.metaKey && !event.ctrlKey && special !== \"meta\") {\n            modif += \"meta+\";\n          }\n          if (this !== target) {\n            if (isTextAcceptingInput(target) && !modif && !isFunctionKey(event)) {\n              return;\n            }\n          }\n          if (event.shiftKey && special !== \"shift\") {\n            modif += \"shift+\";\n          }\n          if (special) {\n            possible[modif + special] = true;\n          } else {\n            possible[modif + character] = true;\n            possible[modif + jQuery.hotkeys.shiftNums[character]] = true;\n            if (modif === \"shift+\") {\n              possible[jQuery.hotkeys.shiftNums[character]] = true;\n            }\n          }\n          for (_i = 0, _len = keys.length; _i < _len; _i++) {\n            key = keys[_i];\n            if (possible[key]) {\n              return origHandler.apply(this, arguments);\n            }\n          }\n        };\n      };\n      return jQuery.each([\"keydown\", \"keyup\", \"keypress\"], function() {\n        return jQuery.event.special[this] = {\n          add: keyHandler\n        };\n      });\n    })(jQuery);\n  } else {\n    console.warn(\"jQuery not found, no hotkeys added :(\");\n  }\n\n}).call(this);\n",
          "type": "blob"
        },
        "pixie": {
          "path": "pixie",
          "content": "module.exports = {\"version\":\"0.9.0\",\"entryPoint\":\"hotkeys\",\"remoteDependencies\":[\"//code.jquery.com/jquery-1.10.1.min.js\",\"http://strd6.github.io/tempest/javascripts/envweb.js\",\"http://strd6.github.io/require/v0.1.0.js\"]};",
          "type": "blob"
        },
        "test/hotkeys": {
          "path": "test/hotkeys",
          "content": "(function() {\n  require(\"../hotkeys\");\n\n  describe(\"hotkeys binding\", function() {\n    return it(\"should bind a hotkey\", function(done) {\n      $(document).bind(\"keydown\", \"a\", function() {\n        return done();\n      });\n      return $(document).trigger($.Event(\"keydown\", {\n        which: 65,\n        keyCode: 65\n      }));\n    });\n  });\n\n}).call(this);\n",
          "type": "blob"
        }
      },
      "entryPoint": "hotkeys",
      "dependencies": {},
      "remoteDependencies": [
        "//code.jquery.com/jquery-1.10.1.min.js",
        "http://strd6.github.io/tempest/javascripts/envweb.js",
        "http://strd6.github.io/require/v0.1.0.js"
      ],
      "repository": {
        "id": 13182272,
        "name": "jquery.hotkeys",
        "full_name": "STRd6/jquery.hotkeys",
        "owner": {
          "login": "STRd6",
          "id": 18894,
          "avatar_url": "https://1.gravatar.com/avatar/33117162fff8a9cf50544a604f60c045?d=https%3A%2F%2Fidenticons.github.com%2F39df222bffe39629d904e4883eabc654.png",
          "gravatar_id": "33117162fff8a9cf50544a604f60c045",
          "url": "https://api.github.com/users/STRd6",
          "html_url": "https://github.com/STRd6",
          "followers_url": "https://api.github.com/users/STRd6/followers",
          "following_url": "https://api.github.com/users/STRd6/following{/other_user}",
          "gists_url": "https://api.github.com/users/STRd6/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/STRd6/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/STRd6/subscriptions",
          "organizations_url": "https://api.github.com/users/STRd6/orgs",
          "repos_url": "https://api.github.com/users/STRd6/repos",
          "events_url": "https://api.github.com/users/STRd6/events{/privacy}",
          "received_events_url": "https://api.github.com/users/STRd6/received_events",
          "type": "User"
        },
        "private": false,
        "html_url": "https://github.com/STRd6/jquery.hotkeys",
        "description": "jQuery hotkeys plugin",
        "fork": false,
        "url": "https://api.github.com/repos/STRd6/jquery.hotkeys",
        "forks_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/forks",
        "keys_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/teams",
        "hooks_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/hooks",
        "issue_events_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/issues/events{/number}",
        "events_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/events",
        "assignees_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/assignees{/user}",
        "branches_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/branches{/branch}",
        "tags_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/tags",
        "blobs_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/languages",
        "stargazers_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/stargazers",
        "contributors_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/contributors",
        "subscribers_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/subscribers",
        "subscription_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/subscription",
        "commits_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/issues/comments/{number}",
        "contents_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/contents/{+path}",
        "compare_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/merges",
        "archive_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/downloads",
        "issues_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/issues{/number}",
        "pulls_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/STRd6/jquery.hotkeys/labels{/name}",
        "created_at": "2013-09-28T22:58:08Z",
        "updated_at": "2013-09-28T22:58:08Z",
        "pushed_at": "2013-09-28T22:58:08Z",
        "git_url": "git://github.com/STRd6/jquery.hotkeys.git",
        "ssh_url": "git@github.com:STRd6/jquery.hotkeys.git",
        "clone_url": "https://github.com/STRd6/jquery.hotkeys.git",
        "svn_url": "https://github.com/STRd6/jquery.hotkeys",
        "homepage": null,
        "size": 0,
        "watchers_count": 0,
        "language": null,
        "has_issues": true,
        "has_downloads": true,
        "has_wiki": true,
        "forks_count": 0,
        "mirror_url": null,
        "open_issues_count": 0,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "master_branch": "master",
        "default_branch": "master",
        "permissions": {
          "admin": true,
          "push": true,
          "pull": true
        },
        "network_count": 0,
        "branch": "v0.9.0",
        "defaultBranch": "master",
        "includedModules": [
          "Bindable"
        ]
      },
      "progenitor": {
        "url": "http://strd6.github.io/editor/"
      }
    },
    "image-reader": {
      "version": "0.1.3",
      "source": {
        "LICENSE": {
          "path": "LICENSE",
          "mode": "100644",
          "content": "Copyright (c) 2012 Daniel X. Moore\n\nMIT License\n\nPermission is hereby granted, free of charge, to any person obtaining\na copy of this software and associated documentation files (the\n\"Software\"), to deal in the Software without restriction, including\nwithout limitation the rights to use, copy, modify, merge, publish,\ndistribute, sublicense, and/or sell copies of the Software, and to\npermit persons to whom the Software is furnished to do so, subject to\nthe following conditions:\n\nThe above copyright notice and this permission notice shall be\nincluded in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\nNONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE\nLIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION\nOF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\nWITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
          "type": "blob"
        },
        "README.md": {
          "path": "README.md",
          "mode": "100644",
          "content": "# Jquery::ImageReader\n\nHelpful jQuery plugins for dropping and pasting image data.\n\n## Usage\n\n```coffeescript\n$(\"html\").pasteImageReader ({name, dataURL, file, event}) ->\n  $(\"body\").css\n    backgroundImage: \"url(#{dataURL})\"\n\n$(\"html\").dropImageReader ({name, dataURL, file, event}) ->\n  $(\"body\").css\n    backgroundImage: \"url(#{dataURL})\"\n```\n\n## Contributing\n\n1. Fork it\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Added some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create new Pull Request\n",
          "type": "blob"
        },
        "test/image_reader.coffee": {
          "path": "test/image_reader.coffee",
          "mode": "100644",
          "content": "require \"../main\"\n\n$(\"html\").pasteImageReader ({name, dataURL, file, event}) ->\n  $(\"body\").css\n    backgroundImage: \"url(#{dataURL})\"\n\n$(\"html\").dropImageReader ({name, dataURL, file, event}) ->\n  $(\"body\").css\n    backgroundImage: \"url(#{dataURL})\"\n",
          "type": "blob"
        },
        "paste.coffee.md": {
          "path": "paste.coffee.md",
          "mode": "100644",
          "content": "Paste\n=====\n\n    (($) ->\n      $.event.fix = ((originalFix) ->\n        (event) ->\n          event = originalFix.apply(this, arguments)\n    \n          if event.type.indexOf('copy') == 0 || event.type.indexOf('paste') == 0\n            event.clipboardData = event.originalEvent.clipboardData\n    \n          return event\n    \n      )($.event.fix)\n    \n      defaults =\n        callback: $.noop\n        matchType: /image.*/\n    \n      $.fn.pasteImageReader = (options) ->\n        if typeof options == \"function\"\n          options =\n            callback: options\n    \n        options = $.extend({}, defaults, options)\n    \n        @each ->\n          element = this\n          $this = $(this)\n    \n          $this.bind 'paste', (event) ->\n            found = false\n            clipboardData = event.clipboardData\n    \n            Array::forEach.call clipboardData.types, (type, i) ->\n              return if found\n    \n              if type.match(options.matchType) or (clipboardData.items && clipboardData.items[i].type.match(options.matchType))\n                file = clipboardData.items[i].getAsFile()\n    \n                reader = new FileReader()\n    \n                reader.onload = (evt) ->\n                  options.callback.call element,\n                    dataURL: evt.target.result\n                    event: evt\n                    file: file\n                    name: file.name\n    \n                reader.readAsDataURL(file)\n    \n                found = true\n    \n    )(jQuery)\n",
          "type": "blob"
        },
        "drop.coffee.md": {
          "path": "drop.coffee.md",
          "mode": "100644",
          "content": "Drop\n====\n\n    (($) ->\n      $.event.fix = ((originalFix) ->\n        (event) ->\n          event = originalFix.apply(this, arguments)\n    \n          if event.type.indexOf('drag') == 0 || event.type.indexOf('drop') == 0\n            event.dataTransfer = event.originalEvent.dataTransfer\n    \n          event\n    \n      )($.event.fix)\n    \n      defaults =\n        callback: $.noop\n        matchType: /image.*/\n    \n      $.fn.dropImageReader = (options) ->\n        if typeof options == \"function\"\n          options =\n            callback: options\n    \n        options = $.extend({}, defaults, options)\n    \n        stopFn = (event) ->\n          event.stopPropagation()\n          event.preventDefault()\n    \n        this.each ->\n          element = this\n          $this = $(this)\n    \n          $this.bind 'dragenter dragover dragleave', stopFn\n    \n          $this.bind 'drop', (event) ->\n            stopFn(event)\n    \n            Array::forEach.call event.dataTransfer.files, (file) ->\n              return unless file.type.match(options.matchType)\n    \n              reader = new FileReader()\n    \n              reader.onload = (evt) ->\n                options.callback.call element,\n                  dataURL: evt.target.result\n                  event: evt\n                  file: file\n                  name: file.name\n    \n              reader.readAsDataURL(file)\n    \n    )(jQuery)\n",
          "type": "blob"
        },
        "main.coffee.md": {
          "path": "main.coffee.md",
          "mode": "100644",
          "content": "\n    require \"./paste\"\n    require \"./drop\"\n",
          "type": "blob"
        },
        "pixie.cson": {
          "path": "pixie.cson",
          "mode": "100644",
          "content": "version: \"0.1.3\"\nentryPoint: \"main\"\nremoteDependencies: [\n  \"//code.jquery.com/jquery-1.10.1.min.js\"\n  \"http://strd6.github.io/require/v0.2.2.js\"\n]\n",
          "type": "blob"
        }
      },
      "distribution": {
        "test/image_reader": {
          "path": "test/image_reader",
          "content": "(function() {\n  require(\"../main\");\n\n  $(\"html\").pasteImageReader(function(_arg) {\n    var dataURL, event, file, name;\n    name = _arg.name, dataURL = _arg.dataURL, file = _arg.file, event = _arg.event;\n    return $(\"body\").css({\n      backgroundImage: \"url(\" + dataURL + \")\"\n    });\n  });\n\n  $(\"html\").dropImageReader(function(_arg) {\n    var dataURL, event, file, name;\n    name = _arg.name, dataURL = _arg.dataURL, file = _arg.file, event = _arg.event;\n    return $(\"body\").css({\n      backgroundImage: \"url(\" + dataURL + \")\"\n    });\n  });\n\n}).call(this);\n\n//# sourceURL=test/image_reader.coffee",
          "type": "blob"
        },
        "paste": {
          "path": "paste",
          "content": "(function() {\n  (function($) {\n    var defaults;\n    $.event.fix = (function(originalFix) {\n      return function(event) {\n        event = originalFix.apply(this, arguments);\n        if (event.type.indexOf('copy') === 0 || event.type.indexOf('paste') === 0) {\n          event.clipboardData = event.originalEvent.clipboardData;\n        }\n        return event;\n      };\n    })($.event.fix);\n    defaults = {\n      callback: $.noop,\n      matchType: /image.*/\n    };\n    return $.fn.pasteImageReader = function(options) {\n      if (typeof options === \"function\") {\n        options = {\n          callback: options\n        };\n      }\n      options = $.extend({}, defaults, options);\n      return this.each(function() {\n        var $this, element;\n        element = this;\n        $this = $(this);\n        return $this.bind('paste', function(event) {\n          var clipboardData, found;\n          found = false;\n          clipboardData = event.clipboardData;\n          return Array.prototype.forEach.call(clipboardData.types, function(type, i) {\n            var file, reader;\n            if (found) {\n              return;\n            }\n            if (type.match(options.matchType) || (clipboardData.items && clipboardData.items[i].type.match(options.matchType))) {\n              file = clipboardData.items[i].getAsFile();\n              reader = new FileReader();\n              reader.onload = function(evt) {\n                return options.callback.call(element, {\n                  dataURL: evt.target.result,\n                  event: evt,\n                  file: file,\n                  name: file.name\n                });\n              };\n              reader.readAsDataURL(file);\n              return found = true;\n            }\n          });\n        });\n      });\n    };\n  })(jQuery);\n\n}).call(this);\n\n//# sourceURL=paste.coffee",
          "type": "blob"
        },
        "drop": {
          "path": "drop",
          "content": "(function() {\n  (function($) {\n    var defaults;\n    $.event.fix = (function(originalFix) {\n      return function(event) {\n        event = originalFix.apply(this, arguments);\n        if (event.type.indexOf('drag') === 0 || event.type.indexOf('drop') === 0) {\n          event.dataTransfer = event.originalEvent.dataTransfer;\n        }\n        return event;\n      };\n    })($.event.fix);\n    defaults = {\n      callback: $.noop,\n      matchType: /image.*/\n    };\n    return $.fn.dropImageReader = function(options) {\n      var stopFn;\n      if (typeof options === \"function\") {\n        options = {\n          callback: options\n        };\n      }\n      options = $.extend({}, defaults, options);\n      stopFn = function(event) {\n        event.stopPropagation();\n        return event.preventDefault();\n      };\n      return this.each(function() {\n        var $this, element;\n        element = this;\n        $this = $(this);\n        $this.bind('dragenter dragover dragleave', stopFn);\n        return $this.bind('drop', function(event) {\n          stopFn(event);\n          return Array.prototype.forEach.call(event.dataTransfer.files, function(file) {\n            var reader;\n            if (!file.type.match(options.matchType)) {\n              return;\n            }\n            reader = new FileReader();\n            reader.onload = function(evt) {\n              return options.callback.call(element, {\n                dataURL: evt.target.result,\n                event: evt,\n                file: file,\n                name: file.name\n              });\n            };\n            return reader.readAsDataURL(file);\n          });\n        });\n      });\n    };\n  })(jQuery);\n\n}).call(this);\n\n//# sourceURL=drop.coffee",
          "type": "blob"
        },
        "main": {
          "path": "main",
          "content": "(function() {\n  require(\"./paste\");\n\n  require(\"./drop\");\n\n}).call(this);\n\n//# sourceURL=main.coffee",
          "type": "blob"
        },
        "pixie": {
          "path": "pixie",
          "content": "module.exports = {\"version\":\"0.1.3\",\"entryPoint\":\"main\",\"remoteDependencies\":[\"//code.jquery.com/jquery-1.10.1.min.js\",\"http://strd6.github.io/require/v0.2.2.js\"]};",
          "type": "blob"
        }
      },
      "entryPoint": "main",
      "dependencies": {},
      "remoteDependencies": [
        "//code.jquery.com/jquery-1.10.1.min.js",
        "http://strd6.github.io/require/v0.2.2.js"
      ],
      "progenitor": {
        "url": "http://strd6.github.io/editor/"
      },
      "repository": {
        "id": 4527535,
        "name": "jquery-image_reader",
        "full_name": "STRd6/jquery-image_reader",
        "owner": {
          "login": "STRd6",
          "id": 18894,
          "avatar_url": "https://1.gravatar.com/avatar/33117162fff8a9cf50544a604f60c045?d=https%3A%2F%2Fidenticons.github.com%2F39df222bffe39629d904e4883eabc654.png&r=x",
          "gravatar_id": "33117162fff8a9cf50544a604f60c045",
          "url": "https://api.github.com/users/STRd6",
          "html_url": "https://github.com/STRd6",
          "followers_url": "https://api.github.com/users/STRd6/followers",
          "following_url": "https://api.github.com/users/STRd6/following{/other_user}",
          "gists_url": "https://api.github.com/users/STRd6/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/STRd6/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/STRd6/subscriptions",
          "organizations_url": "https://api.github.com/users/STRd6/orgs",
          "repos_url": "https://api.github.com/users/STRd6/repos",
          "events_url": "https://api.github.com/users/STRd6/events{/privacy}",
          "received_events_url": "https://api.github.com/users/STRd6/received_events",
          "type": "User",
          "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/STRd6/jquery-image_reader",
        "description": "Paste and Drop images into web apps",
        "fork": false,
        "url": "https://api.github.com/repos/STRd6/jquery-image_reader",
        "forks_url": "https://api.github.com/repos/STRd6/jquery-image_reader/forks",
        "keys_url": "https://api.github.com/repos/STRd6/jquery-image_reader/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/STRd6/jquery-image_reader/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/STRd6/jquery-image_reader/teams",
        "hooks_url": "https://api.github.com/repos/STRd6/jquery-image_reader/hooks",
        "issue_events_url": "https://api.github.com/repos/STRd6/jquery-image_reader/issues/events{/number}",
        "events_url": "https://api.github.com/repos/STRd6/jquery-image_reader/events",
        "assignees_url": "https://api.github.com/repos/STRd6/jquery-image_reader/assignees{/user}",
        "branches_url": "https://api.github.com/repos/STRd6/jquery-image_reader/branches{/branch}",
        "tags_url": "https://api.github.com/repos/STRd6/jquery-image_reader/tags",
        "blobs_url": "https://api.github.com/repos/STRd6/jquery-image_reader/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/STRd6/jquery-image_reader/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/STRd6/jquery-image_reader/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/STRd6/jquery-image_reader/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/STRd6/jquery-image_reader/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/STRd6/jquery-image_reader/languages",
        "stargazers_url": "https://api.github.com/repos/STRd6/jquery-image_reader/stargazers",
        "contributors_url": "https://api.github.com/repos/STRd6/jquery-image_reader/contributors",
        "subscribers_url": "https://api.github.com/repos/STRd6/jquery-image_reader/subscribers",
        "subscription_url": "https://api.github.com/repos/STRd6/jquery-image_reader/subscription",
        "commits_url": "https://api.github.com/repos/STRd6/jquery-image_reader/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/STRd6/jquery-image_reader/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/STRd6/jquery-image_reader/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/STRd6/jquery-image_reader/issues/comments/{number}",
        "contents_url": "https://api.github.com/repos/STRd6/jquery-image_reader/contents/{+path}",
        "compare_url": "https://api.github.com/repos/STRd6/jquery-image_reader/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/STRd6/jquery-image_reader/merges",
        "archive_url": "https://api.github.com/repos/STRd6/jquery-image_reader/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/STRd6/jquery-image_reader/downloads",
        "issues_url": "https://api.github.com/repos/STRd6/jquery-image_reader/issues{/number}",
        "pulls_url": "https://api.github.com/repos/STRd6/jquery-image_reader/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/STRd6/jquery-image_reader/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/STRd6/jquery-image_reader/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/STRd6/jquery-image_reader/labels{/name}",
        "created_at": "2012-06-02T07:12:27Z",
        "updated_at": "2013-08-29T08:31:21Z",
        "pushed_at": "2013-04-17T16:28:05Z",
        "git_url": "git://github.com/STRd6/jquery-image_reader.git",
        "ssh_url": "git@github.com:STRd6/jquery-image_reader.git",
        "clone_url": "https://github.com/STRd6/jquery-image_reader.git",
        "svn_url": "https://github.com/STRd6/jquery-image_reader",
        "homepage": null,
        "size": 160,
        "watchers_count": 4,
        "language": "JavaScript",
        "has_issues": true,
        "has_downloads": true,
        "has_wiki": true,
        "forks_count": 1,
        "mirror_url": null,
        "open_issues_count": 0,
        "forks": 1,
        "open_issues": 0,
        "watchers": 4,
        "master_branch": "master",
        "default_branch": "master",
        "permissions": {
          "admin": true,
          "push": true,
          "pull": true
        },
        "network_count": 1,
        "branch": "v0.1.3",
        "defaultBranch": "master"
      }
    }
  },
  "remoteDependencies": [
    "//code.jquery.com/jquery-1.10.1.min.js",
    "http://strd6.github.io/tempest/javascripts/envweb.js",
    "http://strd6.github.io/require/v0.2.2.js"
  ],
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "repository": {
    "id": 13183366,
    "name": "jquery-utils",
    "full_name": "STRd6/jquery-utils",
    "owner": {
      "login": "STRd6",
      "id": 18894,
      "avatar_url": "https://1.gravatar.com/avatar/33117162fff8a9cf50544a604f60c045?d=https%3A%2F%2Fidenticons.github.com%2F39df222bffe39629d904e4883eabc654.png&r=x",
      "gravatar_id": "33117162fff8a9cf50544a604f60c045",
      "url": "https://api.github.com/users/STRd6",
      "html_url": "https://github.com/STRd6",
      "followers_url": "https://api.github.com/users/STRd6/followers",
      "following_url": "https://api.github.com/users/STRd6/following{/other_user}",
      "gists_url": "https://api.github.com/users/STRd6/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/STRd6/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/STRd6/subscriptions",
      "organizations_url": "https://api.github.com/users/STRd6/orgs",
      "repos_url": "https://api.github.com/users/STRd6/repos",
      "events_url": "https://api.github.com/users/STRd6/events{/privacy}",
      "received_events_url": "https://api.github.com/users/STRd6/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/STRd6/jquery-utils",
    "description": "",
    "fork": false,
    "url": "https://api.github.com/repos/STRd6/jquery-utils",
    "forks_url": "https://api.github.com/repos/STRd6/jquery-utils/forks",
    "keys_url": "https://api.github.com/repos/STRd6/jquery-utils/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/STRd6/jquery-utils/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/STRd6/jquery-utils/teams",
    "hooks_url": "https://api.github.com/repos/STRd6/jquery-utils/hooks",
    "issue_events_url": "https://api.github.com/repos/STRd6/jquery-utils/issues/events{/number}",
    "events_url": "https://api.github.com/repos/STRd6/jquery-utils/events",
    "assignees_url": "https://api.github.com/repos/STRd6/jquery-utils/assignees{/user}",
    "branches_url": "https://api.github.com/repos/STRd6/jquery-utils/branches{/branch}",
    "tags_url": "https://api.github.com/repos/STRd6/jquery-utils/tags",
    "blobs_url": "https://api.github.com/repos/STRd6/jquery-utils/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/STRd6/jquery-utils/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/STRd6/jquery-utils/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/STRd6/jquery-utils/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/STRd6/jquery-utils/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/STRd6/jquery-utils/languages",
    "stargazers_url": "https://api.github.com/repos/STRd6/jquery-utils/stargazers",
    "contributors_url": "https://api.github.com/repos/STRd6/jquery-utils/contributors",
    "subscribers_url": "https://api.github.com/repos/STRd6/jquery-utils/subscribers",
    "subscription_url": "https://api.github.com/repos/STRd6/jquery-utils/subscription",
    "commits_url": "https://api.github.com/repos/STRd6/jquery-utils/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/STRd6/jquery-utils/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/STRd6/jquery-utils/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/STRd6/jquery-utils/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/STRd6/jquery-utils/contents/{+path}",
    "compare_url": "https://api.github.com/repos/STRd6/jquery-utils/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/STRd6/jquery-utils/merges",
    "archive_url": "https://api.github.com/repos/STRd6/jquery-utils/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/STRd6/jquery-utils/downloads",
    "issues_url": "https://api.github.com/repos/STRd6/jquery-utils/issues{/number}",
    "pulls_url": "https://api.github.com/repos/STRd6/jquery-utils/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/STRd6/jquery-utils/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/STRd6/jquery-utils/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/STRd6/jquery-utils/labels{/name}",
    "created_at": "2013-09-29T00:25:09Z",
    "updated_at": "2013-10-25T00:40:45Z",
    "pushed_at": "2013-10-25T00:40:42Z",
    "git_url": "git://github.com/STRd6/jquery-utils.git",
    "ssh_url": "git@github.com:STRd6/jquery-utils.git",
    "clone_url": "https://github.com/STRd6/jquery-utils.git",
    "svn_url": "https://github.com/STRd6/jquery-utils",
    "homepage": null,
    "size": 376,
    "watchers_count": 0,
    "language": "CoffeeScript",
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "master_branch": "master",
    "default_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "network_count": 0,
    "branch": "master",
    "defaultBranch": "master"
  }
});