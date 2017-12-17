class TableHeader < QuestionnaireHeader
  def complete(_count, _answer = nil)
    html = '<br/><big><b>' + self.txt + '</b></big><br/>'
    html += '<table class="general" style="border: 2; text-align: left; width: 100%">'
    html.html_safe
  end

  def view_completed_question(_count, _answer)
    html = '<br/><big><b>' + self.txt + '</b></big><br/>'
    html += '<table class="general" style="border: 2; text-align: left; width: 100%">'
    html.html_safe
  end

  def build_form_data_string
    return %&{"type":"table-header","label":"#{self.txt.gsub('"', '\\\\\"')}","subtype":"h2"}&
  end
end
