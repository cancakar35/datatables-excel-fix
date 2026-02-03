import jszip from 'jszip';
import DataTable from 'datatables.net-dt';
import 'datatables.net-buttons-dt';
import 'datatables.net-buttons/js/buttons.html5.mjs';

DataTable.Buttons.jszip(jszip);

DataTable.ext.buttons.excelHtml5.exportOptions = { orthogonal: 'excelExport' };

DataTable.type('date', {
  ...DataTable.type('date'),
  render: (data, type) => {
    if (type === 'display') return new Date(data).toLocaleDateString();

    return data;
  },
});

DataTable.type('num', {
  ...DataTable.type('num'),
  render: (data, type) => {
    if (type === 'excelExport')
      return data?.toString().replaceAll('.', '').replaceAll(',', '.') ?? '';

    return data;
  },
});
