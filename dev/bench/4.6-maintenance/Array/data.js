window.BENCHMARK_DATA = {
  "lastUpdate": 1718185038383,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a96e60b263df173dff0cbd445e51f7b5898b0455",
          "message": "Merge pull request #3817 from greymistcube/release/4.6.2\n\n🚀 Release 4.6.2",
          "timestamp": "2024-06-11T19:36:12+09:00",
          "tree_id": "36ea731aa4373cde9bc2d0bdc7ee0b9ff3cfe69f",
          "url": "https://github.com/planetarium/libplanet/commit/a96e60b263df173dff0cbd445e51f7b5898b0455"
        },
        "date": 1718185001809,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5760756.142857143,
            "unit": "ns",
            "range": "± 52402.50357034061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14357169.92857143,
            "unit": "ns",
            "range": "± 176843.45627199576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36119884.071428575,
            "unit": "ns",
            "range": "± 90516.64338032348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73431612.43333334,
            "unit": "ns",
            "range": "± 206999.29669634375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146032055.8,
            "unit": "ns",
            "range": "± 282970.68011549994"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 18315.62222222222,
            "unit": "ns",
            "range": "± 1508.202602979936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110642.02777777778,
            "unit": "ns",
            "range": "± 3690.383475901434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104435.79787234042,
            "unit": "ns",
            "range": "± 3717.438780028024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91134.5294117647,
            "unit": "ns",
            "range": "± 1794.2566398667395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3083817.75,
            "unit": "ns",
            "range": "± 56504.78170857165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2835508.285714286,
            "unit": "ns",
            "range": "± 64445.14921554831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4840.369565217391,
            "unit": "ns",
            "range": "± 685.57581024349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26649.30681818182,
            "unit": "ns",
            "range": "± 2407.9273214198834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23242.44,
            "unit": "ns",
            "range": "± 1991.3379914930654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28838.36559139785,
            "unit": "ns",
            "range": "± 4710.894682830027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1143.8105263157895,
            "unit": "ns",
            "range": "± 216.51855086052402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4750.303370786517,
            "unit": "ns",
            "range": "± 540.246522105973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 704672.9897959183,
            "unit": "ns",
            "range": "± 62861.87378320803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1267485.875,
            "unit": "ns",
            "range": "± 65631.78972931323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1077971.3048780488,
            "unit": "ns",
            "range": "± 56660.010358448424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8910354.48,
            "unit": "ns",
            "range": "± 1855650.9425187043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2203107.6515151514,
            "unit": "ns",
            "range": "± 96675.17682146387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2298041.4183673467,
            "unit": "ns",
            "range": "± 90843.72945518326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2700993.8571428573,
            "unit": "ns",
            "range": "± 61709.93712529939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3042506.3214285714,
            "unit": "ns",
            "range": "± 130750.49876395149"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10318643.112244898,
            "unit": "ns",
            "range": "± 873228.2684459228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3044044.265234375,
            "unit": "ns",
            "range": "± 33011.01781397597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919205.3524088542,
            "unit": "ns",
            "range": "± 7703.7223834645965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614874.5223958333,
            "unit": "ns",
            "range": "± 7967.334967556351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1630294.7911458334,
            "unit": "ns",
            "range": "± 26331.79160943569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464401.2288411458,
            "unit": "ns",
            "range": "± 1023.0392665278969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426167.4548502604,
            "unit": "ns",
            "range": "± 1980.6038704043883"
          }
        ]
      }
    ]
  }
}