PennController.ResetPrefix(null);
PennController.Template(
    // 'row' will successively point to each row of the table (feel free to use another name)
    row => PennController(
        // row.Sentence will iteratively take the value of the column 'Sentence' for each row
        newText( "sentence" , row.Sentence )
        ,
        newScale("judgment",    "cold", "cool", "lukewarm", "warm", "hot")
            .settings.labelsPosition("top")
            .settings.before( getText("sentence") )
            .settings.size("auto")
            .print()
            .wait()   
    )
);
