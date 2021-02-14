"use strict";

const editor = ace.edit('editor')
  , socket = io()

let rga


socket.on('init', ({ id, history }) => {
  if (!rga) {
    editor.setWrapBehavioursEnabled(false)
    rga = new RGA.AceEditorRGA(id, editor)

    rga.subscribe(op => { op.id=id; socket.emit('message', op) })

    socket.on('message', op => { rga.receive(op) })

    socket.emit('message', { type: 'historyRequest', id: id})
  }

  editor.focus()
});
