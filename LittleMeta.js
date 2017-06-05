TestingFunction = function() { return "Tested."; }
var __LittleMeta__ = {Write:"<missing>",Read:"<missing>"};
__LittleMeta__.Write = function(META_DATA = {'Example':'Testing123'}, item = TestingFunction) { item.__Meta__ = {META_DATA}; return true; }
__LittleMeta__.Read = function(item = TestingFunction) { if(item.__Meta__ !== undefined) { return item.__Meta__; } else { return false; } }
