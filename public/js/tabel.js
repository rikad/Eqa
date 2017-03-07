/* rikad */
$(document).ready(function() {
    $('.tree').treegrid();
    $('.tree').treegrid('collapseAll');
    $('.tree').treegrid('getRootNodes').treegrid('expand');
});
