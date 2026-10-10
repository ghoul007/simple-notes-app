(function () {
  var STORAGE_KEY = "simple-notes:v1";
  var form = document.getElementById("note-form");
  var list = document.getElementById("note-list");
  var emptyState = document.getElementById("empty-state");

  function loadNotes() {
    try {
      var parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  function saveNotes(notes) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch (error) {
      window.alert("Could not save notes in this browser.");
    }
  }

  function createId() {
    return String(Date.now()) + "-" + Math.random().toString(36).slice(2, 8);
  }

  function render() {
    var notes = loadNotes();
    list.textContent = "";
    emptyState.hidden = notes.length > 0;

    notes.forEach(function (note) {
      var item = document.createElement("li");
      var heading = document.createElement("h3");
      var meta = document.createElement("div");
      var remove = document.createElement("button");

      heading.textContent = note.title;
      meta.className = "note-meta";
      meta.textContent = new Date(note.createdAt).toLocaleString();
      remove.type = "button";
      remove.className = "delete";
      remove.textContent = "Delete";
      remove.setAttribute("aria-label", "Delete note: " + note.title);
      remove.addEventListener("click", function () {
        saveNotes(loadNotes().filter(function (entry) { return entry.id !== note.id; }));
        render();
      });

      item.appendChild(heading);
      if (note.body) {
        var body = document.createElement("p");
        body.textContent = note.body;
        item.appendChild(body);
      }
      item.appendChild(meta);
      item.appendChild(remove);
      list.appendChild(item);
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var title = form.elements.title.value.trim();
    var body = form.elements.body.value.trim();
    if (!title) return;

    var notes = loadNotes();
    notes.unshift({ id: createId(), title: title, body: body, createdAt: new Date().toISOString() });
    saveNotes(notes);
    form.reset();
    form.elements.title.focus();
    render();
  });

  render();
})();
