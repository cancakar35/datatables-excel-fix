## jQuery DataTables excel export tarih ve decimal sorunları için geliştirdiğim çözümdür

```typescript
// DataTables v2 ve üzeri için geçerlidir
// datatables auto type detection açıksa çalışır (varsayılan açıktır)

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
```
