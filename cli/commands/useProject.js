module.exports = {
	name: 'useProject',
	usage: 'use("projectId")',
	description: 'selects a project which contains the id, matching from the right of the complete id',
  alias: [
		'useProject',
		'project',
		'use'
  ],
  execute: function(name) {
	  return this.yodle.useProject(name).then(function(json) {
	    if(json.length) {
	      this.config.project = json[0]._id;
	      return 'project set to ' + this.config.project;
	    } else {
	      return 'error - project not found';
	    }
	  }.bind(this));
	}
};
