window.BENCHMARK_DATA = {
  "lastUpdate": 1695856761522,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e62dcbe4330bc0e15798b4f65b0789d714d781a7",
          "message": "Bump get-func-name from 2.0.0 to 2.0.2\n\nBumps [get-func-name](https://github.com/chaijs/get-func-name) from 2.0.0 to 2.0.2.\n- [Release notes](https://github.com/chaijs/get-func-name/releases)\n- [Commits](https://github.com/chaijs/get-func-name/commits/v2.0.2)\n\n---\nupdated-dependencies:\n- dependency-name: get-func-name\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-09-27T23:04:56Z",
          "tree_id": "936560849fc042d8841fb317d7b814274a9370e6",
          "url": "https://github.com/planetarium/libplanet/commit/e62dcbe4330bc0e15798b4f65b0789d714d781a7"
        },
        "date": 1695856732646,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 263099.6603773585,
            "unit": "ns",
            "range": "± 9662.20654036086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261261.22727272726,
            "unit": "ns",
            "range": "± 9775.96248723352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223981.08,
            "unit": "ns",
            "range": "± 5942.678611254916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4211787.083333333,
            "unit": "ns",
            "range": "± 22820.74226925358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3921376.8,
            "unit": "ns",
            "range": "± 47992.96243825755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18107.536082474227,
            "unit": "ns",
            "range": "± 1482.1582030230984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80658,
            "unit": "ns",
            "range": "± 5389.097879567187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70035.11111111111,
            "unit": "ns",
            "range": "± 1495.7482836709441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74112.68131868132,
            "unit": "ns",
            "range": "± 10574.52349846252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4710.684210526316,
            "unit": "ns",
            "range": "± 503.70933156482926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17921.72340425532,
            "unit": "ns",
            "range": "± 2022.1990659816613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3291158.975,
            "unit": "ns",
            "range": "± 102332.87281082901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3447711.375,
            "unit": "ns",
            "range": "± 35238.25900518734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4198553.7727272725,
            "unit": "ns",
            "range": "± 100136.81036553932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4051789.2325581396,
            "unit": "ns",
            "range": "± 148680.47642989585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10434460.4,
            "unit": "ns",
            "range": "± 338463.81042588846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1309408.7631578948,
            "unit": "ns",
            "range": "± 64248.232248131346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2583482.085106383,
            "unit": "ns",
            "range": "± 99626.09916797598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1992790.9305555555,
            "unit": "ns",
            "range": "± 97241.70676805361"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9623065.758241758,
            "unit": "ns",
            "range": "± 742993.702379208"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50738.9,
            "unit": "ns",
            "range": "± 2802.983033977202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7977405.928571428,
            "unit": "ns",
            "range": "± 99446.25582421916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22564171.6,
            "unit": "ns",
            "range": "± 202010.3707892246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55599084.5,
            "unit": "ns",
            "range": "± 366280.0854568437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112086664.13333334,
            "unit": "ns",
            "range": "± 1510970.2211867932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220744251,
            "unit": "ns",
            "range": "± 2327753.774024128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5021064.917410715,
            "unit": "ns",
            "range": "± 27926.810430350975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1608247.98203125,
            "unit": "ns",
            "range": "± 6103.91504117823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1067818.6606770833,
            "unit": "ns",
            "range": "± 4710.444096553444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2593709.1684895833,
            "unit": "ns",
            "range": "± 8751.676460027205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832877.8451822917,
            "unit": "ns",
            "range": "± 5089.576008075221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772568.7089146206,
            "unit": "ns",
            "range": "± 1353.5820424008698"
          }
        ]
      }
    ]
  }
}