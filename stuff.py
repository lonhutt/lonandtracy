import csv

with open('stuff.tsv', 'rb') as f:
  lines = csv.reader(f, delimiter='\t')
  for l in lines:
    # print l
    print """
      <tr>
        <td><a href="%s" target="_blank">%s</a></td>
        <td><a class="btn btn-primary btn-xs" target="_blank" href="%s" role="button">Map</a></td>
        <td><p><span class="label label-success">%s</span></p></td>
      </tr>
    """ % ( l[1], l[0], l[3], l[2] )