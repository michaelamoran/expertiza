function showHideTeamAndMembers(numTeams){
    var element = document.getElementById('teamsAndMembers');
    var show = element.innerHTML == 'Hide all teams';
    if (show){
        element.innerHTML='Show all teams';
    }else{
        element.innerHTML='Hide all teams';
    }
    toggleTeamsAndMembers(numTeams);
}

function toggleTeamsAndMembers(numTeams) {
    for(var i=1; i<=numTeams; i++){
        var elem = document.getElementById(i.toString() + "_myDiv");
        if (elem.style.display == 'none') {
            elem.style.display = '';
        } else {
            elem.style.display = 'none';
        }
    }
}

function toggleSingleTeamAndMember(i) {
    var elem = document.getElementById(i.toString() + "_myDiv");
    if (elem.style.display == 'none') {
        elem.style.display = '';
    } else {
        elem.style.display = 'none';
    }
}

jQuery("input[id^='due_date_']").datetimepicker({
    dateFormat: 'yy/mm/dd',
    timeFormat: 'HH:mm:ss',
    controlType: 'select',
    timezoneList: [
        { value: -000, label: 'GMT'},
        { value: -300, label: 'Eastern'},
        { value: -360, label: 'Central' },
        { value: -420, label: 'Mountain' },
        { value: -480, label: 'Pacific' }
    ]
});
