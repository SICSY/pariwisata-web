<?php

namespace App\Imports;

use App\Models\Destinasi;
use App\Models\Pariwisata;
use Maatwebsite\Excel\Concerns\ToCollection;
use Illuminate\Support\Collection;

class GenericImport implements ToCollection
{
    private $data;
    private $type;

    public function __construct($type)
    {
        $this->type = $type;
    }

    public function collection(Collection $rows)
    {
        // Proses sesuai dengan jenis data
        $this->data = [];

        if ($this->type === 'destinasi') {
            foreach ($rows as $row) {
                $this->data[] = [
                    'nama' => $row[0],
                    'lokasi' => $row[1],
                ];
            }
            Destinasi::insert($this->data); // Insert multiple records at once for better performance
        } elseif ($this->type === 'pariwisata') {
            foreach ($rows as $row) {
                $this->data[] = [
                    'title' => $row[0],
                    'deskripsi' => $row[1],
                ];
            }
            Pariwisata::insert($this->data);
        }
    }

    public function getData()
    {
        return $this->data;
    }
}
