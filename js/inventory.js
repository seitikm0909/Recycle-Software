(function () {
  function appendInventoryMovements(record, ctx) {
    const key = window.RecycleStorage.KEYS.inventoryMovements;
    const movements = window.RecycleStorage.readJson(key, []);
    const items = (record.items || []).length ? record.items : [{
      description: record.description,
      quantity: record.quantity,
      unit: record.unit,
      unitPrice: record.unitPrice,
      lineTotal: record.total
    }];

    items.forEach((item) => {
      const movement = {
        movement_id: window.RecycleUtils.generateId('mv'),
        transaction_record_id: record.record_id,
        clientId: record.clientId,
        transaction_type: record.type,
        direction: record.type === 'purchase' ? 'in' : 'out',
        category: record.category,
        description: item.description,
        quantity: Number(item.quantity || 0),
        unit: item.unit || '',
        unit_price: Number(item.unitPrice || 0),
        subtotal: Number(item.lineTotal || 0),
        ...window.RecycleAudit.buildRecordMetadata({ existingRecord: null, device: ctx.device, user: ctx.user })
      };
      movements.push(movement);
    });

    window.RecycleStorage.writeJson(key, movements);
  }

  window.RecycleInventory = { appendInventoryMovements };
})();
